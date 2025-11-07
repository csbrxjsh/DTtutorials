const StudentManager = {
  students: [],

  STORAGE_KEY: 'student_records_v1',

  init: function() {
    // Load from localStorage if available
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) this.students = JSON.parse(raw);
    } catch (e) {
      console.warn('Failed to load students from storage', e);
      this.students = [];
    }

    // Wire button
    const btn = document.getElementById('addBtn');
    if (btn) btn.addEventListener('click', () => this.addStudent());

    // Render any existing students
    this.displayTable();
  },

  save: function() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.students));
    } catch (e) {
      console.warn('Failed to save students to storage', e);
    }
  },

  escapeHtml: function(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  },

  addStudent: function() {
    const firstName = document.getElementById('firstName').value.trim();
    const middleName = document.getElementById('middleName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();

    if (!firstName || !lastName || !phone || !address) {
      alert('Please fill in First name, Last name, Phone and Address.');
      return;
    }

    const student = { firstName, middleName, lastName, phone, address };
    this.students.push(student);
    this.save();
    this.displayTable();

    // Clear inputs
    document.getElementById('firstName').value = '';
    document.getElementById('middleName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('firstName').focus();
  },

  displayTable: function() {
    const tbody = document.querySelector('#studentTable tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (this.students.length === 0) {
      const row = document.createElement('tr');
      row.innerHTML = '<td colspan="5" style="text-align:center;color:#666">No student records</td>';
      tbody.appendChild(row);
      return;
    }

    this.students.forEach(student => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${this.escapeHtml(student.firstName)}</td>
        <td>${this.escapeHtml(student.middleName)}</td>
        <td>${this.escapeHtml(student.lastName)}</td>
        <td>${this.escapeHtml(student.phone)}</td>
        <td>${this.escapeHtml(student.address)}</td>
      `;
      tbody.appendChild(row);
    });
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => StudentManager.init());
} else {
  StudentManager.init();
}