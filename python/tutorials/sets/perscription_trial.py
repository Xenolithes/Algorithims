from perscription_data import patients, warfarin, edoxaban

trial_patients = ["Denise", "Eddie", "Frank", "Georgia", "Kenny"]

#Remove Warfarin and add Edoxaban
for patient in trial_patients:
    prescription = patients[patient]
    try:
        prescription.remove(warfarin)
        prescription.add(edoxaban)
    except KeyError:
        print(f"Patient {patient} is not taking Wargarin")
        print(f"Please remove {patient} from the Trial")
    print(patient, prescription)