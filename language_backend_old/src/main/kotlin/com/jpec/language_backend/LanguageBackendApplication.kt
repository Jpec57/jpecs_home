package com.jpec.language_backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class LanguageBackendApplication {
}

fun main(args: Array<String>) {
	println("This is a test")
	runApplication<LanguageBackendApplication>(*args)
}