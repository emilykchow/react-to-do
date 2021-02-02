import Cookies from "universal-cookie";

const cookies = new Cookies();

const NoteStore = {
    Get: function(index) {
    },
    GetAll: function() {
        let notes = cookies.getAll().notes;
        if (notes === undefined) {
            notes = [];
        }
        return notes;
    },
    Add: function(note) {
        cookies.set('notes', [...this.GetAll(), note], { path: '/' });
    },
    UpdateAll: function(notes) {
        cookies.set('notes', notes);
    }
};


export default NoteStore;