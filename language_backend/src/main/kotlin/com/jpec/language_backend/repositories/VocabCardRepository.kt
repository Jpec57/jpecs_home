package com.jpec.language_backend.repositories

import org.springframework.data.repository.CrudRepository;



//TODO https://www.baeldung.com/spring-boot-hibernate
// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
// public interface VocabCardRepository extends CrudRepository<VocabCard, Integer> {

// }
import org.springframework.data.jpa.repository.JpaRepository;
/*
@Repository("memberRepository")
interface VocabCardRepository: JpaRepository<Member, Long> {
    Member findByEmail(String email);
}

 */