package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"
	//"bytes"
	"os"
	//"path/filepath"
	"crypto/rand"
)

// upload logic
func upload(w http.ResponseWriter, r *http.Request) {

	// the FormFile function takes in the POST input id file
	file, header, err := r.FormFile("file")

	if err != nil {
		fmt.Fprintln(w, err)
		return
	}

	defer file.Close()

	uuid, err := newUUID()
	if err != nil {
		fmt.Printf("error: %v\n", err)
	}

	name := strings.Split(header.Filename, ".")
	out, err := os.Create("./../src/assets/images/" + uuid + "." + name[1])
	if err != nil {
		fmt.Fprintf(w, "Unable to create the file for writing. Check your write access privilege")
		return
	}

	defer out.Close()

	// write the content from POST to the file
	_, err = io.Copy(out, file)
	if err != nil {
		fmt.Fprintln(w, err)
	}
	fmt.Println("File uploaded successfully : ")
	//fmt.Fprintf(w, "File uploaded successfully : ")
	//fmt.Fprintf(w, header.Filename)
	fmt.Fprintf(w, "[\""+uuid+"."+name[1]+"\"]")

	//fmt.Sprintf("%b", uuid+name[1])
}

func newUUID() (string, error) {
	uuid := make([]byte, 16)
	n, err := io.ReadFull(rand.Reader, uuid)
	if n != len(uuid) || err != nil {
		return "", err
	}
	// variant bits; see section 4.1.1
	uuid[8] = uuid[8]&^0xc0 | 0x80
	// version 4 (pseudo-random); see section 4.1.3
	uuid[6] = uuid[6]&^0xf0 | 0x40
	return fmt.Sprintf("%x-%x-%x-%x-%x", uuid[0:4], uuid[4:6], uuid[6:8], uuid[8:10], uuid[10:]), nil
}

func sayhelloName(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()       // parse arguments, you have to call this by yourself
	fmt.Println(r.Form) // print form information in server side
	fmt.Println("path", r.URL.Path)
	fmt.Println("scheme", r.URL.Scheme)
	fmt.Println(r.Form["url_long"])
	for k, v := range r.Form {
		fmt.Println("key:", k)
		fmt.Println("val:", strings.Join(v, ""))
	}
	fmt.Fprintf(w, "Hello astaxie!") // send data to client side
}

func main() {
	fmt.Println("Upload Service started successfully!")
	http.HandleFunc("/upload", upload)
	http.HandleFunc("/", sayhelloName)       // set router
	err := http.ListenAndServe(":9090", nil) // set listen port
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
