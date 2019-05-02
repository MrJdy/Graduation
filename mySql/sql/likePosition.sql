CREATE TABLE `NewTable` (
`phone_num`  varchar(13) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL ,
`position_list`  varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT '' ,
PRIMARY KEY (`phone_num`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_unicode_ci
ROW_FORMAT=DYNAMIC
;
