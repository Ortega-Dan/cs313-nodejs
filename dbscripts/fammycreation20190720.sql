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

--------------------------------------------------------------

create table authentication
(
	keyid serial not null
		constraint authentication_pk
			primary key,
	userid serial not null
		constraint authentication_fammyuser_keyid_fk
			references fammyuser,
	password varchar(200) not null
);

insert into authentication (userid, password)
values ('1','somepasstemp');

/* just for testing table !!
create table firsttable
(
	numba integer
);*/