package todo.management.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import todo.management.app.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
