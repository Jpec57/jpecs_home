package com.jpec.language_backend.resolvers

import com.jpec.language_backend.annotations.Auth
import com.jpec.language_backend.models.User
import com.jpec.language_backend.services.AuthTokenHandler
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.core.MethodParameter
import org.springframework.web.bind.support.WebArgumentResolver.UNRESOLVED
import org.springframework.web.bind.support.WebDataBinderFactory
import org.springframework.web.context.request.NativeWebRequest
import org.springframework.web.method.support.HandlerMethodArgumentResolver
import org.springframework.web.method.support.ModelAndViewContainer
import org.springframework.web.util.WebUtils
import javax.servlet.http.HttpServletRequest

class AuthTokenWebResolver : HandlerMethodArgumentResolver {

    @Autowired
    lateinit var authTokenHandler: AuthTokenHandler

    // to register Auth annotation
    override fun supportsParameter(methodParameter: MethodParameter): Boolean {
        return methodParameter.getParameterAnnotation(Auth::class.java) != null
    }

    override fun resolveArgument(parameter: MethodParameter,
                                 mavContainer: ModelAndViewContainer?,
                                 webRequest: NativeWebRequest,
                                 binderFactory: WebDataBinderFactory?): Any? {
        if (parameter.parameterType == User::class.java) {
            // looking for the auth token in the headers
            var authToken = webRequest.getHeader("authToken")

            // looking for the auth token in the cookies
            if (authToken == null) {
                val servletRequest = webRequest.nativeRequest as HttpServletRequest
                val authTokenCookie = WebUtils.getCookie(servletRequest, "authToken")
                if (authTokenCookie != null)
                    authToken = authTokenCookie.value
            }

            return authTokenHandler.getUserFromToken(authToken)
        }

        return UNRESOLVED
    }
}