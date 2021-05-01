package com.jpec.language_backend.models

import javax.persistence.ManyToOne

abstract class SRSCard (
    var nextAvailable: Long,
    var level: Int,
    var errorCount: Int,
    var successCount: Int
)