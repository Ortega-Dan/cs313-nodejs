-- Needed for Milestone 1
create table fammyuser
(
	keyid serial not null
		constraint fammyuser_pk
			primary key,
	username varchar(50) not null,
	profilepicpath varchar(500)
);

create unique index fammyuser_username_uindex
	on fammyuser (username);

insert into fammyuser (username, profilepicpath)
values ('Dan Ortega',null);

insert into fammyuser (username, profilepicpath)
values ('Jenn Bohorquez',null);

insert into fammyuser (username, profilepicpath)
values ('Amie Ortega',null);

insert into fammyuser (username, profilepicpath)
values ('Annie Ortega',null);

/* just for testing table !!
create table firsttable
(
	numba integer
);*/