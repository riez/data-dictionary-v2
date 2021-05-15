export default {
    "scalars": [
        0,
        1,
        5,
        18,
        20,
        76,
        77
    ],
    "types": {
        "JSON": {},
        "JSONObject": {},
        "Query": {
            "metadata": [
                17
            ],
            "postgres": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "Postgres": {
            "schemas": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "Schema": {
            "name": [
                5
            ],
            "tables": [
                8
            ],
            "views": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "String": {},
        "BelongsToTable": {
            "table_schema": [
                5
            ],
            "table_name": [
                5
            ],
            "on_PostgresCheck": [
                9
            ],
            "on_PostgresColumn": [
                10
            ],
            "on_PostgresIndex": [
                11
            ],
            "on_PostgresPrimaryKey": [
                12
            ],
            "on_PostgresForeignKey": [
                13
            ],
            "__typename": [
                5
            ]
        },
        "PostgresView": {
            "table_schema": [
                5
            ],
            "table_name": [
                5
            ],
            "comment": [
                5
            ],
            "columns": [
                10
            ],
            "__typename": [
                5
            ]
        },
        "PostgresTable": {
            "table_schema": [
                5
            ],
            "table_name": [
                5
            ],
            "comment": [
                5
            ],
            "columns": [
                10
            ],
            "primary_key": [
                12
            ],
            "foreign_keys": [
                13
            ],
            "checks": [
                9
            ],
            "indexes": [
                11
            ],
            "__typename": [
                5
            ]
        },
        "PostgresCheck": {
            "table_schema": [
                5
            ],
            "table_name": [
                5
            ],
            "constraint_name": [
                5
            ],
            "column_name": [
                5
            ],
            "definition": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "PostgresColumn": {
            "table_schema": [
                5
            ],
            "table_name": [
                5
            ],
            "column_name": [
                5
            ],
            "column_default": [
                5
            ],
            "is_nullable": [
                5
            ],
            "data_type": [
                5
            ],
            "udt_name": [
                5
            ],
            "comment": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "PostgresIndex": {
            "table_schema": [
                5
            ],
            "table_name": [
                5
            ],
            "index_name": [
                5
            ],
            "index_type": [
                5
            ],
            "index_keys": [
                5
            ],
            "is_unique": [
                5
            ],
            "is_primary": [
                5
            ],
            "is_partial": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "PostgresPrimaryKey": {
            "table_schema": [
                5
            ],
            "table_name": [
                5
            ],
            "constraint_name": [
                5
            ],
            "columns": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "PostgresForeignKey": {
            "table_schema": [
                5
            ],
            "table_name": [
                5
            ],
            "constraint_name": [
                5
            ],
            "ref_table_table_schema": [
                5
            ],
            "ref_table": [
                5
            ],
            "column_mapping": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "Sources": {
            "name": [
                5
            ],
            "kind": [
                5
            ],
            "tables": [
                19
            ],
            "query_collections": [
                70
            ],
            "allowlist": [
                73
            ],
            "__typename": [
                5
            ]
        },
        "RestEndpointEntry": {
            "name": [
                5
            ],
            "url": [
                5
            ],
            "comment": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "InheritedRole": {
            "role_name": [
                5
            ],
            "role_set": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "HasuraMetadata": {
            "version": [
                18
            ],
            "sources": [
                14
            ],
            "remote_schemas": [
                68
            ],
            "cron_triggers": [
                74
            ],
            "actions": [
                22
            ],
            "query_collections": [
                70
            ],
            "allowlist": [
                73
            ],
            "__typename": [
                5
            ]
        },
        "Int": {},
        "TableEntry": {
            "table": [
                21
            ],
            "is_enum": [
                20
            ],
            "configuration": [
                29
            ],
            "event_triggers": [
                31
            ],
            "computed_fields": [
                37
            ],
            "object_relationships": [
                40
            ],
            "array_relationships": [
                43
            ],
            "remote_relationships": [
                47
            ],
            "insert_permissions": [
                49
            ],
            "select_permissions": [
                51
            ],
            "update_permissions": [
                53
            ],
            "delete_permissions": [
                55
            ],
            "__typename": [
                5
            ]
        },
        "Boolean": {},
        "QualifiedTable": {
            "name": [
                5
            ],
            "schema": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "Action": {
            "name": [
                5
            ],
            "definition": [
                24
            ],
            "comment": [
                5
            ],
            "permissions": [
                23
            ],
            "__typename": [
                5
            ]
        },
        "ActionPermission": {
            "role": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "ActionDefinition": {
            "arguments": [
                25
            ],
            "output_type": [
                5
            ],
            "kind": [
                5
            ],
            "headers": [
                28
            ],
            "forward_client_headers": [
                20
            ],
            "handler": [
                5
            ],
            "type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "InputArgument": {
            "name": [
                5
            ],
            "type": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "HeaderFromEnv": {
            "name": [
                5
            ],
            "value_from_env": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "HeaderFromValue": {
            "name": [
                5
            ],
            "value": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "Header": {
            "on_HeaderFromEnv": [
                26
            ],
            "on_HeaderFromValue": [
                27
            ],
            "__typename": [
                5
            ]
        },
        "TableConfig": {
            "custom_root_fields": [
                30
            ],
            "custom_column_names": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "CustomRootFields": {
            "select": [
                5
            ],
            "select_by_pk": [
                5
            ],
            "select_aggregate": [
                5
            ],
            "insert": [
                5
            ],
            "insert_one": [
                5
            ],
            "update": [
                5
            ],
            "update_by_pk": [
                5
            ],
            "delete": [
                5
            ],
            "delete_by_pk": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "EventTrigger": {
            "name": [
                5
            ],
            "definition": [
                32
            ],
            "retry_conf": [
                36
            ],
            "webhook": [
                5
            ],
            "webhook_from_env": [
                5
            ],
            "headers": [
                28
            ],
            "__typename": [
                5
            ]
        },
        "EventTriggerDefinition": {
            "enable_manual": [
                20
            ],
            "insert": [
                33
            ],
            "delete": [
                33
            ],
            "update": [
                33
            ],
            "__typename": [
                5
            ]
        },
        "OperationSpec": {
            "on_OperationSpecAllColumns": [
                34
            ],
            "on_OperationSpecIndividualColumns": [
                35
            ],
            "__typename": [
                5
            ]
        },
        "OperationSpecAllColumns": {
            "columns": [
                5
            ],
            "payload": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "OperationSpecIndividualColumns": {
            "columns": [
                5
            ],
            "payload": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "RetryConf": {
            "num_retries": [
                18
            ],
            "interval_sec": [
                18
            ],
            "timeout_sec": [
                18
            ],
            "__typename": [
                5
            ]
        },
        "ComputedField": {
            "name": [
                5
            ],
            "definition": [
                39
            ],
            "comment": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "QualifiedFunction": {
            "name": [
                5
            ],
            "schema": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "ComputedFieldDefinition": {
            "function": [
                38
            ],
            "table_argument": [
                5
            ],
            "session_argument": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "ObjectRelationship": {
            "name": [
                5
            ],
            "using": [
                41
            ],
            "comment": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "ObjRelUsing": {
            "foreign_key_constraint_on": [
                5
            ],
            "manual_configuration": [
                42
            ],
            "__typename": [
                5
            ]
        },
        "ObjRelUsingManualMapping": {
            "remote_table": [
                21
            ],
            "column_mapping": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "ArrayRelationship": {
            "name": [
                5
            ],
            "using": [
                44
            ],
            "comment": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "ArrRelUsing": {
            "foreign_key_constraint_on": [
                45
            ],
            "manual_configuration": [
                46
            ],
            "__typename": [
                5
            ]
        },
        "ArrRelUsingFKeyOn": {
            "column": [
                5
            ],
            "table": [
                21
            ],
            "__typename": [
                5
            ]
        },
        "ArrRelUsingManualMapping": {
            "remote_table": [
                21
            ],
            "column_mapping": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "RemoteRelationship": {
            "name": [
                5
            ],
            "definition": [
                48
            ],
            "__typename": [
                5
            ]
        },
        "RemoteRelationshipDef": {
            "hasura_fields": [
                5
            ],
            "remote_schema": [
                5
            ],
            "remote_field": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "InsertPermissionEntry": {
            "role": [
                5
            ],
            "permission": [
                50
            ],
            "comment": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "InsertPermission": {
            "check": [
                1
            ],
            "set": [
                1
            ],
            "columns": [
                5
            ],
            "backend_only": [
                20
            ],
            "__typename": [
                5
            ]
        },
        "SelectPermissionEntry": {
            "role": [
                5
            ],
            "permission": [
                52
            ],
            "comment": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "SelectPermission": {
            "columns": [
                5
            ],
            "computed_fields": [
                5
            ],
            "limit": [
                18
            ],
            "allow_aggregations": [
                20
            ],
            "filter": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "UpdatePermissionEntry": {
            "role": [
                5
            ],
            "permission": [
                54
            ],
            "comment": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "UpdatePermission": {
            "check": [
                1
            ],
            "set": [
                1
            ],
            "columns": [
                5
            ],
            "filter": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "DeletePermissionEntry": {
            "role": [
                5
            ],
            "permission": [
                56
            ],
            "comment": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "DeletePermission": {
            "filter": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "CustomTypes": {
            "input_objects": [
                58
            ],
            "objects": [
                60
            ],
            "scalars": [
                63
            ],
            "enums": [
                64
            ],
            "__typename": [
                5
            ]
        },
        "InputObjectType": {
            "name": [
                5
            ],
            "fields": [
                59
            ],
            "description": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "InputObjectField": {
            "name": [
                5
            ],
            "type": [
                5
            ],
            "description": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "ObjectType": {
            "name": [
                5
            ],
            "fields": [
                61
            ],
            "relationships": [
                62
            ],
            "description": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "ObjectField": {
            "name": [
                5
            ],
            "type": [
                5
            ],
            "description": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "CustomTypeObjectRelationship": {
            "name": [
                5
            ],
            "type": [
                5
            ],
            "remote_table": [
                21
            ],
            "field_mapping": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "ScalarType": {
            "name": [
                5
            ],
            "description": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "EnumType": {
            "name": [
                5
            ],
            "values": [
                65
            ],
            "description": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "EnumValue": {
            "value": [
                5
            ],
            "is_deprecated": [
                20
            ],
            "description": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "CustomFunction": {
            "function": [
                38
            ],
            "configuration": [
                67
            ],
            "__typename": [
                5
            ]
        },
        "FunctionConfiguration": {
            "session_argument": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "RemoteSchema": {
            "name": [
                5
            ],
            "definition": [
                69
            ],
            "comment": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "RemoteSchemaDef": {
            "url": [
                5
            ],
            "url_from_env": [
                5
            ],
            "headers": [
                28
            ],
            "forward_client_headers": [
                20
            ],
            "timeout_seconds": [
                18
            ],
            "__typename": [
                5
            ]
        },
        "QueryCollectionEntry": {
            "name": [
                5
            ],
            "definition": [
                71
            ],
            "comment": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "QueryCollectionDefinition": {
            "queries": [
                72
            ],
            "__typename": [
                5
            ]
        },
        "QueryCollection": {
            "name": [
                5
            ],
            "query": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "AllowList": {
            "collection": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "CronTrigger": {
            "name": [
                5
            ],
            "webhook": [
                5
            ],
            "schedule": [
                5
            ],
            "payload": [
                1
            ],
            "headers": [
                28
            ],
            "retry_conf": [
                75
            ],
            "include_in_metadata": [
                20
            ],
            "comment": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "RetryConfST": {
            "num_retries": [
                18
            ],
            "retry_interval_seconds": [
                18
            ],
            "timeout_seconds": [
                18
            ],
            "tolerance_seconds": [
                18
            ],
            "__typename": [
                5
            ]
        },
        "CacheControlScope": {},
        "Upload": {}
    }
}