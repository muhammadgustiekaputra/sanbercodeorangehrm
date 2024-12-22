describe('Login Test', () => {
    it('should login successfully with valid credentials', () => {
      // masuk ke halaman login OrangeHRM
      cy.visit('https://orangehrm.com/orangehrm-30/web/index.php/auth/login')
  
      // mencari elemen input username dan isi dengan nilai yang valid
      cy.get('input[name="username"]').type('your_username')
  
      // mencari elemen input password dan isi dengan nilai yang valid
      cy.get('input[name="password"]').type('your_password')
  
      // Klik tombol login
      cy.get('button[type="submit"]').click()
  
      // Verifikasi berhasil login dengan memeriksa judul halaman
      cy.title().should('eq', 'OrangeHRM')
  
      // Verifikasi bahwa elemen tertentu yang hanya muncul setelah login ada
      cy.get('#welcome').should('be.visible')
    })
  })