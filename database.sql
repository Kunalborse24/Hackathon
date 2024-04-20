create table user (id int(10) auto_increment primary key, full_name varchar(50), email varchar(30), password varchar (20), phone_no varchar(10), createdTimestamp DATETIME default CURRENT_TIMESTAMP);

create table categories (id int(10) auto_increment primary key, full_name varchar(30), description varchar(50));

create table blogs (id int(10) auto_increment primary key, title varchar(20), contents varchar(30), createdTimestamp DATETIME default CURRENT_TIMESTAMP, user_id int(10),  foreign key(user_id) references user(id),
category_id int(10),  foreign key(category_id) references categories(id));

root>desc user;;
+------------------+-------------+------+-----+-------------------+-------------------+
| Field            | Type        | Null | Key | Default           | Extra             |
+------------------+-------------+------+-----+-------------------+-------------------+
| id               | int         | NO   | PRI | NULL              | auto_increment    |
| full_name        | varchar(50) | YES  |     | NULL              |                   |
| email            | varchar(30) | YES  |     | NULL              |                   |
| password         | varchar(20) | YES  |     | NULL              |                   |
| phone_no         | varchar(10) | YES  |     | NULL              |                   |
| createdTimestamp | datetime    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+------------------+-------------+------+-----+-------------------+-------------------+
6 rows in set (0.02 sec)

root>desc categories;
+-------------+-------------+------+-----+---------+----------------+
| Field       | Type        | Null | Key | Default | Extra          |
+-------------+-------------+------+-----+---------+----------------+
| id          | int         | NO   | PRI | NULL    | auto_increment |
| full_name   | varchar(30) | YES  |     | NULL    |                |
| description | varchar(50) | YES  |     | NULL    |                |
+-------------+-------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)

root>desc blogs;
+------------------+-------------+------+-----+-------------------+-------------------+
| Field            | Type        | Null | Key | Default           | Extra             |
+------------------+-------------+------+-----+-------------------+-------------------+
| id               | int         | NO   | PRI | NULL              | auto_increment    |
| title            | varchar(20) | YES  |     | NULL              |                   |
| contents         | varchar(30) | YES  |     | NULL              |                   |
| createdTimestamp | datetime    | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
| user_id          | int         | YES  | MUL | NULL              |                   |
| category_id      | int         | YES  | MUL | NULL              |                   |
+------------------+-------------+------+-----+-------------------+-------------------+
6 rows in set (0.00 sec)
