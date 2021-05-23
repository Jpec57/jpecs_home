package com.jpec.language_backend.models

import javax.persistence.MappedSuperclass

@MappedSuperclass
abstract class SRSCard (
    var nextAvailable: Long? = -1,
    var level: Int = 0,
    var errorCount: Int = 0,
    var successCount: Int = 0,
    var isActive: Boolean = false
){
    constructor(): this(-1)
}