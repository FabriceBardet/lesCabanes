import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  trierParDate = true;

  pageRetourDeDetailEvenement = '/home';

  constructor(private firestore: AngularFirestore) { }

  /**
   * retourne une collection en snapshotChanges
   * @param collectioName le nom de la collection
   */
  getCollectionSnapshot(collectioName: string) {
    return this.firestore.collection(collectioName).snapshotChanges();
  }

  /**
   * retourne une collection en ValueChanges
   * @param collectionName le nom de la collection
   */
  getCollectionValue(collectionName: string) {
    return this.firestore.collection(collectionName).valueChanges();
  }

  /**
   * récupère un évènement grâce à son ID
   * @param id, l'ID de l'évènement dans la BD
   */
  getEventDocById(id: string) {
    return this.firestore.collection('Evenements').doc(id).valueChanges();
  }

  /**
   * Récupération de la collection événements trier par date de réalisation
   */
  getAllEvenementsTrierParDate() {
    return this.firestore.collection('Evenements', ref => ref.orderBy('date')).snapshotChanges();
  }

  /**
   * Récupération de la collection événements trier par ordre alphabétique
   */
  getAllEvenementsTrierParNom() {
    return this.firestore.collection('Evenements', ref => ref.orderBy('titre')).snapshotChanges();
  }

  /**
   * Récupére la collection et affiche les deux premier événement et se limit à deux événement
   * @param nameTable est le nom de la collection
   */
  getAllEvenementsTrieraleatoirement(nameTable) {
    return this.firestore.collection(nameTable, ref => ref.orderBy('date').limit(3)).valueChanges();
  }

  /**
   * Récupération des créneaux d'escalade/yoga pour un jour
   * @param jour string, le jour
   */
  getCoursByJour(collection: string, jour: string) {
    return this.firestore.collection(collection, ref =>
      ref.where('jour', '==', jour)
        .orderBy('debut')).valueChanges();

  }

  /**
   * Récupération des textes pour la partie "histoire" de la page de présentation des cabanes
   */
  getHistoireCabanes() {
    return this.firestore.collection('PresentationCabanes').doc('Histoire').valueChanges();
  }

  /**
   * Récupération des textes pour la partie "tiers-lieu" de la page de présentation des cabanes
   */
  getPresentationTiersLieu() {
    return this.firestore.collection('PresentationCabanes').doc('TiersLieu').valueChanges();
  }

  /**
   * Récupération des informations de camp4
   */
  getDetailsCamp4() {
    return this.firestore.collection('Camp4').valueChanges();
  }

  getDetailsPage(page: string) {
    return this.firestore.collection('DetailsPage').doc(page).collection('Details').valueChanges();
  }

  /**
   * Récupération des tarifs de la page donnée
   * @param page nom de la page, correspond au document cherché en BD
   */
  getTarifs(page: string) {
    return this.firestore.collection('DetailsPage').doc(page).collection('Tarifs').valueChanges();
  }

  /**
   * Récupération des contacts de la page donnée
   * @param page nom de la page, correspond au document cherché en BD
   */
  getContacts(page: string) {
    return this.firestore.collection('DetailsPage').doc(page).collection('Contacts').valueChanges();
  }

  /**
   * Récupération des programmes
   * @param nom de la base et type de programme
   */
  getProgramme(tableName, type) {
    return this.firestore.collection(tableName, ref => ref.where('type', '==', type)).valueChanges();
  }
}
