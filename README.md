# Cara berkontribusi :

### Branching

##### `main`

branch utama hanya untuk production

##### `develop`

branch untuk development

Note :

- buat branch baru dengan format `feature/nama_fitur` atau `bugfix/nama_fitur`
- pastikan fitur baru selalu chekout dari branch `develop`
- pastikan melakukan pull dari branch `develop` ketika ingin merge branch baru ke `develop` agar tidak konflik
- pastikan melakukan pull request sebelum merge branch baru ke `develop`

### Pesan Commit

Silahkan memakai format pesan berikut agar mudah dipahami oleh kontributor yang lain

Format: `<type>: <name_kontributor> - <subject>`

## Example

```
feat : Safta Fhatona - add login page
```

Keterangan type :

- `feat`: (untuk fitur baru)
- `fix`: (bug fixing)
- `docs`: (update dokumentasi)
- `style`: (rules code ESLint dan Prettier)
- `refactor`: (refactoring )
- `test`: (unit test dan integration test)
