import mysql.connector
import json


def db_to_json(rows):
    # Struktur data JSON yang diinginkan
    json_data = {"item_categories": []}

    # Membuat struktur data yang sesuai dengan format yang diinginkan
    current_category = None
    current_sub_category = None
    current_item_list = None

    # Mengonversi data ke format JSON
    for row in rows:
        item_name = row[0]  # Assuming the third column is item_name
        category_name = row[1]  # Assuming the first column is category
        sub_category_name = row[2]  # Assuming the second column is sub_category

        if current_category != category_name:
            # Memulai kategori baru
            current_category = category_name
            current_sub_category = None
            current_item_list = None

            json_data["item_categories"].append({
                "name": category_name,
                "sub_categories": []
            })

        if current_sub_category != sub_category_name:
            # Memulai sub-kategori baru
            current_sub_category = sub_category_name
            current_item_list = []

            json_data["item_categories"][-1]["sub_categories"].append({
                "name": sub_category_name,
                "items": current_item_list
            })

        # Menambahkan item ke dalam sub-kategori
        current_item_list.append({
            "name": item_name
        })

    # Menyimpan data ke file JSON
    with open('fetch/output.json', 'w') as json_file:
        json.dump(json_data, json_file, indent=2)

    print("Data telah diambil dan disimpan dalam format JSON.")



# Mengganti dengan informasi koneksi ke database Anda
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'albion',
}

# Membuat koneksi ke database
db = mysql.connector.connect(**db_config)

if db.is_connected():
    print("Berhasil terhubung ke database")

    # Membuat objek cursor untuk melakukan query
    cursor = db.cursor()

    # Contoh query untuk mengambil data dari tabel
    # query = """
    # SELECT
    #     items.id AS item_id,
    #     items.item_name AS item_name,
    #     item_categories.category_name AS category,
    #     item_sub_categories.sub_category_name AS sub_category
    # FROM
    #     items
    # JOIN item_sub_categories ON
    #     items.sub_category_id = item_sub_categories.id
    # JOIN item_categories ON
    #     item_sub_categories.category_id = item_categories.id;
    # """

    query = """
    SELECT
        i.item_name AS item_name,
        ic.category_name AS category,
        isc.sub_category_name AS sub_category
    FROM
        item_categories ic
    JOIN
        item_sub_categories isc ON ic.id = isc.category_id
    JOIN
        items i ON isc.id = i.sub_category_id
    """
    cursor.execute(query)

    # Mendapatkan semua baris data
    rows = cursor.fetchall()

    # Cetak informasi untuk debug
    print("Description:", cursor.description)
    
    for row in rows:
        print("Row:", row)

    db_to_json(rows)

    # Menutup kursor dan koneksi
    db.close()
    print("Database Ditutup")
