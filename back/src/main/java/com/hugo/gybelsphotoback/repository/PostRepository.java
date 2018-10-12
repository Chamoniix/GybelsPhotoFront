package com.hugo.gybelsphotoback.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hugo.gybelsphotoback.domain.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>{

	List<Post> findAll();

}