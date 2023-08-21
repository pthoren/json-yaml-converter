# json-yaml-converter

A small library to convert json files to yaml files and vice versa. Exports two functions:

- `jsonToYaml(inputFilepath: string, outputFilepath: string)`
- `yamlToJson(inputFilepath: string, outputFilepath: string)`

### Motivation

Several workflow and flow-based programming tools store user programs as json. Unfortunately, these programs are painful to code review in their native format because json does not support multi-line strings. For example:

Json:

```
          "expressions": {
            "$id": "24",
            "JavaScript": "const hello = \"hello\";\n\nconst world = \"world\";\n\nreturn `${hello} ${world}`;"
          }
```

Source code is much easier to read when stored as yaml:

```
        expressions:
          $id: '24'
          JavaScript: |-
            const hello = "hello";

            const world = "world";

            return `${hello} ${world}`;
```

Diffs are easier to read too. Compare:

```
diff --git a/__tests__/input.json b/__tests__/input.json
index 47d7c34..b6393d8 100644
--- a/__tests__/input.json
+++ b/__tests__/input.json
@@ -109,7 +109,7 @@
           "syntax": "JavaScript",
           "expressions": {
             "$id": "24",
-            "JavaScript": "const hello = \"hello\";\n\nconst world = \"world\";\n\nreturn `${hello} ${world}`;"
+            "JavaScript": "const hello = \"hello\";\n\nconst world = \"world!\";\n\nreturn `${hello} ${world}`;"
           }
         }
       ],
```

After:

```
diff --git a/__tests__/output.yaml b/__tests__/output.yaml
index 3368821..dd7f06a 100644
--- a/__tests__/output.yaml
+++ b/__tests__/output.yaml
@@ -79,7 +79,7 @@ activities:
           JavaScript: |-
             const hello = "hello";

-            const world = "world";
+            const world = "world!";

             return `${hello} ${world}`;
     propertyStorageProviders:
```



