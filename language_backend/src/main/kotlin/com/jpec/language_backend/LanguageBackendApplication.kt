package com.jpec.language_backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan

@ComponentScan("com.jpec")
@SpringBootApplication
class LanguageBackendApplication {
}

fun main(args: Array<String>) {
	runApplication<LanguageBackendApplication>(*args)
}