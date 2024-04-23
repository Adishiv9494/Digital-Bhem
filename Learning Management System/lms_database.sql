-- Create the database
CREATE DATABASE IF NOT EXISTS lms;

-- Use the database
USE lms;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    user_type ENUM('student', 'instructor', 'administrator') NOT NULL
);

-- Insert some sample data
INSERT INTO users (username, password, user_type) VALUES
('student1', '$2y$10$yPswa18xRQp94RTAxSxUb.0DCoiC.bfs.sB8vybSX9UC4CN8hf8kC', 'student'), -- Password: password1
('instructor1', '$2y$10$gI3E.Tb/07J2zNcVTTq9XesWS0U0tr1.TMmDPFDyL5iflQft2RUC2', 'instructor'), -- Password: password2
('admin1', '$2y$10$30vIctv.K8XTtPK06y3nu.voiG86Qq6SgcyRqXv4jVLnnvDtwKzeW', 'administrator'); -- Password: password3
