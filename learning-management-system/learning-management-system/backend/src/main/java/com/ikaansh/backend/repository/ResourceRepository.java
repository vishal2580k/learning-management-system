package com.ikaansh.backend.repository;

import com.ikaansh.backend.entity.Resource;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepository extends JpaRepository<Resource, Long> {
}
