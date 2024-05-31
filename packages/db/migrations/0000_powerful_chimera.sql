CREATE TABLE `diagrams` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`type_id` int NOT NULL,
	`status` enum('new','pending','processing','error','done') NOT NULL DEFAULT 'new',
	`original_language_id` int NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	`deleted_at` timestamp,
	CONSTRAINT `diagrams_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `diagrams_elements` (
	`id` int AUTO_INCREMENT NOT NULL,
	`svg` text NOT NULL,
	`uml` text NOT NULL,
	`ascii` text NOT NULL,
	`translation_id` int,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	`deleted_at` timestamp,
	CONSTRAINT `diagrams_elements_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `diagrams_translations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`diagram_id` int NOT NULL,
	`language_id` int NOT NULL,
	`name` varchar(100) NOT NULL,
	`description` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	`deleted_at` timestamp,
	CONSTRAINT `diagrams_translations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `languages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`code` varchar(6) NOT NULL,
	`name` varchar(10) NOT NULL,
	CONSTRAINT `languages_id` PRIMARY KEY(`id`),
	CONSTRAINT `languages_code_unique` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `types` (
	`id` int AUTO_INCREMENT NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	`deleted_at` timestamp,
	CONSTRAINT `types_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `types_translations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`type_id` int NOT NULL,
	`language_id` int NOT NULL,
	`name` varchar(100) NOT NULL,
	`description` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	`deleted_at` timestamp,
	CONSTRAINT `types_translations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(20) NOT NULL,
	`email` varchar(255) NOT NULL,
	`avatar` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	`deleted_at` timestamp,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `diagrams` ADD CONSTRAINT `diagrams_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `diagrams` ADD CONSTRAINT `diagrams_type_id_types_id_fk` FOREIGN KEY (`type_id`) REFERENCES `types`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `diagrams` ADD CONSTRAINT `diagrams_original_language_id_languages_id_fk` FOREIGN KEY (`original_language_id`) REFERENCES `languages`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `diagrams_elements` ADD CONSTRAINT `diagrams_elements_translation_id_diagrams_translations_id_fk` FOREIGN KEY (`translation_id`) REFERENCES `diagrams_translations`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `diagrams_translations` ADD CONSTRAINT `diagrams_translations_diagram_id_diagrams_id_fk` FOREIGN KEY (`diagram_id`) REFERENCES `diagrams`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `diagrams_translations` ADD CONSTRAINT `diagrams_translations_language_id_languages_id_fk` FOREIGN KEY (`language_id`) REFERENCES `languages`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `types_translations` ADD CONSTRAINT `types_translations_type_id_types_id_fk` FOREIGN KEY (`type_id`) REFERENCES `types`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `types_translations` ADD CONSTRAINT `types_translations_language_id_languages_id_fk` FOREIGN KEY (`language_id`) REFERENCES `languages`(`id`) ON DELETE no action ON UPDATE no action;