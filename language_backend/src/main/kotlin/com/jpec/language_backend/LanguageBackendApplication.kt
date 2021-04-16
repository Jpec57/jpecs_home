package com.jpec.language_backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

// import org.springframework.data.annotation.Id
// import org.springframework.web.bind.annotation.GetMapping
// import org.springframework.web.bind.annotation.RestController
@SpringBootApplication
class LanguageBackendApplication {
}

fun main(args: Array<String>) {
	println("This is a test")
	runApplication<LanguageBackendApplication>(*args)
}