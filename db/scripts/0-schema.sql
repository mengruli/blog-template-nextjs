USE blog;

CREATE TABLE category (
  category_name  VARCHAR(128) NOT NULL PRIMARY KEY,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE post (
  id BIGINT NOT NULL auto_increment PRIMARY KEY,
  title VARCHAR(128) NOT NULL,
  description VARCHAR(255) NOT NULL,
  author VARCHAR(50) NOT NULL DEFAULT 'Unknown',
  file_name VARCHAR(255) NOT NULL, 
  category VARCHAR(128) NOT NULL,
  tags VARCHAR(255), 
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE post add CONSTRAINT fk_post_category_category_name
FOREIGN KEY (category) REFERENCES category(category_name);

CREATE INDEX idx_post_category ON post(category);
CREATE INDEX idx_post_tags ON post(tags);
CREATE INDEX idx_post_creaeted_at ON post(created_at);
CREATE INDEX idx_post_updated_at ON post(updated_at);
