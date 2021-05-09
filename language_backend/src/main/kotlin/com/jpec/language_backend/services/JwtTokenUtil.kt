package com.jpec.language_backend.services

import com.jpec.language_backend.models.AuthToken
import com.jpec.language_backend.models.User
import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jwts
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import java.io.Serializable
import java.util.*
import kotlin.reflect.KFunction
import java.util.Date;
import java.util.HashMap;
import java.util.function.Function;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails

@Component
class JwtTokenUtil : Serializable {
    @Value("\${jwt.secret}")
    private val secret: String? = null

    //retrieve username from jwt token
    fun getUsernameFromToken(token: String?): String {
        return getClaimFromToken(token, Claims::getSubject)
    }

    //retrieve expiration date from jwt token
    fun getExpirationDateFromToken(token: String?): Date {
        return getClaimFromToken<Date>(token, Claims::getExpiration)
    }

    fun <T> getClaimFromToken(token: String?, claimsResolver: Function<Claims, T>): T {
        val claims: Claims = getAllClaimsFromToken(token)
        return claimsResolver.apply(claims)
    }

    //for retrieving any information from token we will need the secret key
    private fun getAllClaimsFromToken(token: String?): Claims {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).body
    }

    //check if the token has expired
    private fun isTokenExpired(token: String?): Boolean {
        val expiration: Date = getExpirationDateFromToken(token)
        return expiration.before(Date())
    }

    //generate token for user
//    fun generateToken(user: User): AuthToken {
//        val claims: Map<String, Any> = HashMap()
//        val token = doGenerateToken(claims, user.username)
//        return AuthToken(user = user, token = token, expiredOn = getExpirationDateFromToken(token).time)
//    }

    fun generateToken(user: UserDetails): AuthToken {
        val claims: Map<String, Any> = HashMap()
        val token = doGenerateToken(claims, user.username)
        return AuthToken(user = User(username = user.username, password = user.password, id=-1), token = token, expiredOn = getExpirationDateFromToken(token).time)
    }

    fun generateTokenFromUser(user: User): AuthToken {
        val claims: Map<String, Any> = HashMap()
        val token = doGenerateToken(claims, user.username)
        return AuthToken(user = user, token = token, expiredOn = getExpirationDateFromToken(token).time)
    }


    //while creating the token -
    //1. Define  claims of the token, like Issuer, Expiration, Subject, and the ID
    //2. Sign the JWT using the HS512 algorithm and secret key.
    //3. According to JWS Compact Serialization(https://tools.ietf.org/html/draft-ietf-jose-json-web-signature-41#section-3.1)
    //   compaction of the JWT to a URL-safe string
    private fun doGenerateToken(claims: Map<String, Any>, subject: String): String {
        return Jwts.builder().setClaims(claims).setSubject(subject)
            .setIssuedAt(Date(System.currentTimeMillis()))
            .setExpiration(Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
            .signWith(SignatureAlgorithm.HS512, secret).compact()
    }

    //validate token
    fun validateToken(token: String?, user: User): Boolean {
        val username = getUsernameFromToken(token)
        return username == user.username && !isTokenExpired(token)
    }

    companion object {
        private const val serialVersionUID = -2550185165626007488L
        const val JWT_TOKEN_VALIDITY = (5 * 60 * 60).toLong()
    }
}