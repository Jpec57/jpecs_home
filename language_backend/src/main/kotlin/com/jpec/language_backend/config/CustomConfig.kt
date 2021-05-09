package com.jpec.language_backend.config

import org.springframework.boot.web.client.RestTemplateBuilder
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.client.RestTemplate
import org.springframework.web.method.support.HandlerMethodArgumentResolver
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport
//
//@Configuration
//class CustomConfig : WebMvcConfigurationSupport() {
//
//    @Bean
//    fun authWebArgumentResolverFactory() : HandlerMethodArgumentResolver {
//        return AuthTokenWebResolver()
//    }
//
//    // Adding the AuthWebResolver to the default argument resolvers
//    override fun addArgumentResolvers(argumentResolvers: MutableList<HandlerMethodArgumentResolver>) {
//        argumentResolvers.add(authWebArgumentResolverFactory())
//    }
//
//    // TODO: define CORS mappings
//    public override fun addCorsMappings(registry: CorsRegistry) {
//        registry
//            .addMapping("/**")
//            .allowedOriginPatterns("*")
//            .allowedMethods("GET", "DELETE", "PATCH", "POST", "PUT")
//            .allowCredentials(true)
//    }
//
//    @Bean
//    fun restTemplate(builder: RestTemplateBuilder): RestTemplate {
//        return builder.build()
//    }
//}