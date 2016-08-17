/** Note Application Class**/


class NotesApplication{
		/** class constructor that instatiate an object**/

			constructor(author){
				this.author=author;
				let notes=[]
			}
		/** Create a notes list/array to store all the 
		notes as an instance property**/
		
			create(note_content){
			   
				this.notes.push(note_content);
			}
        /** This function lists out each of 
        the notes in the notes list in the following format**/
        	list(){
        		for(var i=0;i<this.notes.length;i++){
        		return "NOTEID:"+i+"  "+this.notes[i]+" "+this.author	
        		}
        	}
			
        /**This function takes a note_id which refers to the
         index of the note in the notes list and returns the
          content of that note as a string.**/
          	getNote(note_id){
          		return this.notes[note_id]
          	}

        /**This function take a search string, search_text and 
        returns all the notes with that text within it in the following format
        Showing results for search ‘[<search_text>]’**/
  			search(search_text){
  				for(search_text in this.notes){
  				return "Showing results for search '[<search_text>]'"+this.notes.indexOf(search_text)+" "+search_text+" "+this.author  	
  				}
  			}

  		/**This function deletes the note at the 
  		index note_id of the notes list**/
  			delete(note_id){
  				return this.note_id.splice(note_id,1)
  			}	

  		/**This function replaces the content in the 
  		note at note_id with new_content**/
  			edit(note_id,new_content){
  				if (isNaN(note_id) === false) {
  				return this.notes[note_id]=new_content
  				}
  				else{
  				return 'no value'	
  				}
  			}
		}
		
		