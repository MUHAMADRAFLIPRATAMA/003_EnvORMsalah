# CRUD Komik

API CRUD mengikuti struktur repository referensi `015_EnvORM`, dengan domain `komik`.

## Jalankan

```bash
npm install
npm start
```

## Endpoint

- `GET /komik`
- `POST /komik`
- `PUT /komik/:id`
- `DELETE /komik/:id`

Body JSON memakai field `title`, `description`, dan `author`.
