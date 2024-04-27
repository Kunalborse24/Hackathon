create table user (id int(10) auto_increment primary key, full_name varchar(50), email varchar(30), password varchar (100), phone_no varchar(10), createdTimestamp DATETIME default CURRENT_TIMESTAMP);

create table categories (id int(10) auto_increment primary key, title varchar(30), description varchar(50));

create table blogs (id int(10) auto_increment primary key, title varchar(20), contents varchar(30), createdTimestamp DATETIME default CURRENT_TIMESTAMP, user_id int(10),  foreign key(user_id) references user(id),
category_id int(10),  foreign key(category_id) references categories(id));

root>desc user;;
+------------------+-------------+------+-----+-------------------+-------------------+
| Field            | Type        | Null | Key | Default           | Extra             |
+------------------+-------------+------+-----+-------------------+-------------------+
| id               | int         | NO   | PRI | NULL              | auto_increment    |
| full_name        | varchar(50) | YES  |     | NULL              |                   |
| email            | varchar(30) | YES  |     | NULL              |                   |
| password         | varchar(100) | YES  |     | NULL              |                   |
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


select blogs.id, blogs.title, categories.title, blogs.createdTimestamp, user.full_name from blogs, user, categories where blogs.category_id = categories.id and blogs.user_id = user.id;
+----+---------+--------+---------------------+-----------+
| id | title   | title  | createdTimestamp    | full_name |
+----+---------+--------+---------------------+-----------+
|  1 | cars3   | Movie  | 2024-04-20 13:10:51 | shardul   |
|  2 | onelove | Music  | 2024-04-20 13:11:43 | shashwat  |
|  3 | raigad  | Nature | 2024-04-20 13:12:24 | kunal     |
+----+---------+--------+---------------------+-----------+
3 rows in set (0.00 sec)


select blogs.id, blogs.title, categories.title, blogs.createdTimestamp, user.full_name from blogs, user, categories where blogs.category_id = categories.id and blogs.user_id = user.id and blogs.id = any(select blogs.id from blogs where title like '%?%' or contents like '%?%');
+----+--------+--------+---------------------+-----------+
| id | title  | title  | createdTimestamp    | full_name |
+----+--------+--------+---------------------+-----------+
|  1 | cars3  | Movie  | 2024-04-20 13:10:51 | shardul   |
|  3 | raigad | Nature | 2024-04-20 13:12:24 | kunal     |
+----+--------+--------+---------------------+-----------+
2 rows in set (0.01 sec)

select blogs.id, blogs.title, categories.title, blogs.createdTimestamp, user.full_name from blogs, user, categories where blogs.category_id = categories.id and blogs.user_id = user.id and user.id = 3;
+----+---------+-------+---------------------+-----------+
| id | title   | title | createdTimestamp    | full_name |
+----+---------+-------+---------------------+-----------+
|  2 | onelove | Music | 2024-04-20 13:11:43 | shashwat  |
+----+---------+-------+---------------------+-----------+
1 row in set (0.00 sec)

