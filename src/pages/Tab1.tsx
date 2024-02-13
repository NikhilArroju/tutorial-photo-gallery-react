import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonFab,
  IonFabButton,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { add } from "ionicons/icons";
import { useRef, useState } from "react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";

const Tab1: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    "This modal example uses triggers to automatically open a modal when the button is clicked."
  );

  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === "confirm") {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonFab
          slot="fixed"
          vertical="bottom"
          horizontal="end"
          className="ion-padding"
        >
          <IonFabButton id="open-modal">
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonModal
          ref={modal}
          trigger="open-modal"
          onWillDismiss={(ev) => onWillDismiss(ev)}
        >
          <IonHeader>
            <IonToolbar>
              {/* <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  Cancel
                </IonButton>
              </IonButtons> */}
              <IonTitle>Add Expense</IonTitle>
              {/* <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm()}>
                  Confirm
                </IonButton>
              </IonButtons> */}
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonInput
                label="Amount"
                labelPlacement="stacked"
                ref={input}
                type="text"
                placeholder="Amount"
              />
            </IonItem>
            <IonItem>
              <IonInput
                label="Category"
                labelPlacement="stacked"
                ref={input}
                type="text"
                placeholder="category"
              />
            </IonItem>
            <IonItem>
              <IonInput
                label="Expense type"
                labelPlacement="stacked"
                ref={input}
                type="text"
                placeholder="cash"
              />
            </IonItem>
            <IonItem>
              <IonInput
                label="paid for"
                labelPlacement="stacked"
                ref={input}
                type="text"
                placeholder="Electricity"
              />
            </IonItem>
            <IonDatetimeButton datetime="datetime"></IonDatetimeButton>

            <IonModal keepContentsMounted={true}>
              <IonDatetime id="datetime"></IonDatetime>
            </IonModal>
          </IonContent>
          <IonFooter>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  Cancel
                </IonButton>
              </IonButtons>

              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm()}>
                  Confirm
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonFooter>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
