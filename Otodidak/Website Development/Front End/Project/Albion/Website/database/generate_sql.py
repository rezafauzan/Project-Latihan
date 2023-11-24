import json

# Baca data dari file JSON dengan menyertakan parameter encoding
with open('raw/accessories/cape/data-cape.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Buka file SQL sebelum loop
with open('generated/accessories/cape.sql', 'w', encoding='utf-8') as sql_file:
    sql_file.write("START TRANSACTION;")
    # Proses setiap item dalam data
    for item in data:
        unique_name = item.get("UniqueName")
        localized_name_en_us = item.get("LocalizedNames", {}).get("EN-US")
        localized_name_id_id = item.get("LocalizedNames", {}).get("ID-ID")
        localized_description_en_us = item.get("LocalizedDescriptions", {}).get("EN-US")
        localized_description_id_id = item.get("LocalizedDescriptions", {}).get("ID-ID")

        # Replace both Unicode right single quote and regular single quote
        modified_name_en_us = localized_name_en_us.replace("\u2019", "\\'").replace("'", "\\'")
        
        print("============================================================")
        print(unique_name)
        print(modified_name_en_us)
        print(localized_name_id_id)
        print(localized_description_en_us)
        print(localized_description_id_id)
        print("============================================================")

        # Generate SQL query
        # JANGAN LUPA GANTI SUB CATEGORY ID
        sql_query = f"""
INSERT INTO `items` (`id`, `item_name`, `item_idn_name`, `item_unique_name`, `item_description`, `item_idn_description`, `sub_category_id`, `created_at`, `updated_at`)
VALUES (NULL, '{modified_name_en_us}', '{localized_name_id_id}', '{unique_name}', '{localized_description_en_us}', '{localized_description_id_id}', 2, current_timestamp(), current_timestamp());
"""
        # Tulis SQL query ke file
        sql_file.write(sql_query)
    sql_file.write("COMMIT;")


