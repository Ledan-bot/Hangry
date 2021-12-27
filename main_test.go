package main

import (
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"
)

func Test_PingRoute(t *testing.T) {
	ts := httptest.NewServer(setupServer())
	defer ts.Close()

	response, err := http.Get(fmt.Sprintf("%s/api/test/ping", ts.URL))
	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}

	if response.StatusCode != 200 {
		t.Fatalf("Expected Status code 200, but got %v", response.StatusCode)
	}
	val, ok := response.Header["Content-Type"]
	if !ok {
		t.Fatalf("Expected Content-Type header to be set")
	}

	if val[0] != "application/json; charset=utf-8" {
		t.Fatalf("Expected \"application/json: charset=utf-8\", got %s", val[0])
	}
}

func Test_GetMenus(t *testing.T) {
	ts := httptest.NewServer(setupServer())
	defer ts.Close()

	response, err := http.Get(fmt.Sprintf("%s/api/menus/all", ts.URL))
	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}

	if response.StatusCode != 200 {
		t.Fatalf("Expected Status code 200, but got %v", response.StatusCode)
	}
	val, ok := response.Header["Content-Type"]
	if !ok {
		t.Fatalf("Expected Content-Type header to be set")
	}

	if val[0] != "application/json; charset=utf-8" {
		t.Fatalf("Expected \"application/json: charset=utf-8\", got %s", val[0])
	}
}

func Test_GetMostOrderedMenus(t *testing.T) {
	ts := httptest.NewServer(setupServer())
	defer ts.Close()

	response, err := http.Get(fmt.Sprintf("%s/api/menus/most_ordered", ts.URL))
	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}

	if response.StatusCode != 200 {
		t.Fatalf("Expected Status code 200, but got %v", response.StatusCode)
	}
	val, ok := response.Header["Content-Type"]
	if !ok {
		t.Fatalf("Expected Content-Type header to be set")
	}

	if val[0] != "application/json; charset=utf-8" {
		t.Fatalf("Expected \"application/json: charset=utf-8\", got %s", val[0])
	}
}
