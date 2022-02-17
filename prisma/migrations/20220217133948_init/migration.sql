CREATE extension IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS public.users(id uuid default uuid_generate_v4() not null primary key, name varchar(100) not null);
CREATE TABLE IF NOT EXISTS public.auth_credentials (id uuid default uuid_generate_v4() not null primary key, login varchar(180) not null unique,password varchar(180) not null,user_id uuid not null references public.users);
CREATE TABLE IF NOT EXISTS public.item (id uuid default uuid_generate_v4() not null primary key, name varchar not null,price decimal not null);
CREATE TABLE IF NOT EXISTS public.cart (id uuid default uuid_generate_v4() not null primary key, subtotal decimal not null,discounts decimal not null,taxes decimal not null,total decimal not null, user_id uuid not null references public.users);
CREATE TABLE IF NOT EXISTS public.cart_items (id uuid default uuid_generate_v4() not null primary key, cart_id uuid not null REFERENCES public.cart,item_id uuid not null REFERENCES public.item);
