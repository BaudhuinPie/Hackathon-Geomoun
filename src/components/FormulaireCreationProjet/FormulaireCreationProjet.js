import React, { Component } from "react";
import "./FormulaireCreationProjet.css";

export class FormulaireCreationProjet extends Component {
  render() {
    return (
      <div className="FullPage">
        <div className="AllContent">
          <div className="CreateProjectTitle">Crée ton projet</div>
          <div className="CreateProjectSubBox">
            <div className="CreateProjectSubTitle">
              titre
              <div className="ToolTip">?</div>
            </div>
            <div className="TheActualTip">
              <p>
                Choisis un titre accrocheur, court, qui résume bien la situation
                ou le problème que tu veux résoudre. Trouve quelques mots-clés
                qui décrivent le mieux ton objectif.
              </p>
            </div>
            <div className="numberOne">
              <div className="REMPLISMOI">Titre</div>
            </div>
          </div>
          <div className="CreateProjectSubBox">
            <div className="CreateProjectSubTitle">
              description de la problématique
              <div className="ToolTip">?</div>
            </div>
            <div className="TheActualTip">
              <p>
                Résume en quelques lignes la situation qui te pousse à l’action.
                Décris le problème que tu veux résoudre. Tu peux par exemple
                raconter une petite histoire qui présente qui tu es, de ce qu’il
                se passe et pourquoi tu te sens concerné(e). Ne t’étends pas
                trop sur les solutions pour le moment, tu pourras faire ça dans
                la case « Solution au problème ».
              </p>
            </div>
            <div className="CreateProjectInputForm">
              <div className="REMPLISMOI">Description</div>
            </div>
          </div>
          <div className="CreateProjectSubBox">
            <div className="CreateProjectSubTitle">
              solution au problème
              <div className="ToolTip">?</div>
            </div>
            <div className="TheActualTip">
              <p>
                Explique en quelques lignes ce que tu souhaites faire pour
                résoudre ce problème, et comment tu veux le faire. Ne décris pas
                encore tes besoins trop dans les détails, un autre espace
                d’écriture est consacré à cela.
              </p>
            </div>
            <div className="CreateProjectInputForm">
              <div className="REMPLISMOI">Solution</div>
            </div>
          </div>
          <div className="CreateProjectSubBox">
            <div className="CreateProjectSubTitle">
              images - vidéos - audios
              <div className="ToolTip">?</div>
            </div>
            <div className="TheActualTip">
              <p>
                Sélectionne des images, des vidéos ou des enregistrements audio
                qui racontent encore mieux le problème que tu veux résoudre.
                Essaye de limiter le nombre de fichiers que tu rajoutes afin de
                faciliter la compréhension de tes lecteurs.
              </p>
            </div>
            <div className="InputMediaContent">
              <button className="InputMediaContentButton">
                Ajouter un fichier
              </button>
            </div>
          </div>
          <div className="CreateProjectSubBox">
            <div className="CreateProjectSubTitle">
              comment nous aider
              <div className="ToolTip">?</div>
            </div>
            <div className="TheActualTip">
              <p>
                a. Sur place : Explique en détail aux lecteurs ce que tu attends
                des gens qui viendront soutenir ton projet Par exemple :
                apporter des gants pour planter des arbres sans se blesserb.
                Depuis chez moi : Explique en détail aux lecteurs qui habitent
                loin, ce qu’ils peuvent faire pour t’aider à distance avec ton
                projet. Par exemple : - sensibiliser leurs proches et leurs amis
                au problème qui te touche. - les pousser à partager ton projet
                sur tous les réseaux qu’ils connaissents
              </p>
            </div>
            <div className="CreateProjectInputForm">
              <div className="CreateProjectOneForm">
                <div className="REMPLISMOI">Sur place :</div>
              </div>
              <div className="CreateProjectOneForm2">
                <div className="REMPLISMOI">Chez vous :</div>
              </div>
            </div>
          </div>
          <div className="CreateProjectSubBox">
            <div className="CreateProjectSubTitle">
              contact
              <div className="ToolTip">?</div>
            </div>
            <div className="TheActualTip">
              <p>
                Indique aux gens qui souhaitent collaborer avec toi, te suivre
                sur les réseaux sociaux ou te contacter (si tu le
                souhaites).  Par exemple : - par email (Tu es encore jeune ?
                Demande à tes parents ou ton professeur de t’aider dans cette
                étape !)  - en suivant une story instagram
              </p>
            </div>
            <div className="CreateProjectInputForm">
              <div className="REMPLISMOI">Lien de contact</div>
            </div>
          </div>
          <div className="CreateProjectSubBox">
            <div className="CreateProjectSubTitle">
              événement
              <div className="ToolTip">?</div>
            </div>
            <div className="TheActualTip">
              <p>
                Si tu organises un rassemblement avec les gens qui souhaitent
                t’aider, tu peux partager les informations comme l’heure ou le
                lieu de ton évènement. Tu peux aussi indiquer un lien de
                l’évènement si tu en as créé un sur un réseau social.
              </p>
            </div>
            <div className="CreateProjectInputForm">
              <div className="REMPLISMOI">Date, Heure, Lieu, Lien</div>
            </div>
          </div>
          <div className="CreateProjectSubBox">
            <div className="CreateProjectSubTitle">
              participants
              <div className="ToolTip">?</div>
            </div>
            <div className="TheActualTip">
              <p>
                Tu peux remercier tes contributeurs ici, raconter comment ils
                t’ont aidé, ce qu’ils ont apporté à ton projet. Tu peux
                également ajouter des photos de projets déjà réalisés ou d’un
                évènement avec tes collaborateurs.
              </p>
            </div>
            <div className="CreateProjectInputForm">
              <div className="REMPLISMOI">Participants</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormulaireCreationProjet;
