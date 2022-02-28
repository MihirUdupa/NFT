import React ,{ useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import styles from "./style";
import Modal from "react-native-modal";
import Tabs from '../Bottom_Tabs'

const Infopage = (props) =>{
    const currency  = props.navigation.state.params.data.totalVal
    const Username = props.navigation.state.params.data.Username
    let data = {
        Username:Username,
        totalVal:currency
    }
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible1, setModalVisible1] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisible3, setModalVisible3] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleModal1 = () => {
        setModalVisible1(!isModalVisible1);
    };

    const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
    };
    
    const toggleModal3 = () => {
        setModalVisible3(!isModalVisible3);
    };

    return(
        <View style={styles.container}>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalBody}>
                    <View style={styles.modalBorderStyles}>
                        <View style={{flexDirection:"row"}}>
                            <View>
                                <Text style={styles.modalBodyHeading}>F.A.Q</Text>
                            </View>
                            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                                <Text style={styles.closeButtonText}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <Text >FAQ1</Text>
                        <Text >FAQ1</Text>
                        <Text >FAQ1</Text>
                        <Text >FAQ1</Text>
                    </View>
                </View>
            </Modal>
            {/* for Modal 2 */}
            <Modal isVisible={isModalVisible1}>
                <View style={styles.modalBody}>
                    <View style={styles.modalBorderStyles}>
                        <View style={{flexDirection:"row"}}>
                            <View>
                                <Text style={styles.modalBodyHeading}>NFT</Text>
                            </View>
                            <TouchableOpacity style={styles.closeButton} onPress={toggleModal1}>
                                <Text style={styles.closeButtonText}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>ybuyb</Text>
                        
                    </View>
                </View>
            </Modal>
            {/* For modal 3 */}
            <Modal isVisible={isModalVisible2}>
                <View style={styles.modalBody}>
                    <View style={styles.modalBorderStyles}>
                        <View style={{flexDirection:"row"}}>
                            <View>
                                <Text style={styles.modalBodyHeading}>Carbon Credits</Text>
                            </View>
                            <TouchableOpacity style={styles.closeButton} onPress={toggleModal2}>
                                <Text style={styles.closeButtonText}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>sefsefsfsff</Text>
                    </View>
                    
                </View>
            </Modal>
            {/* For Modal 4 */}
            <Modal isVisible={isModalVisible3}>
                <View style={styles.modalBody}>
                    <View style={styles.modalBorderStyles}>
                        <View style={{flexDirection:"row"}}>
                            <View style={styles.modalBodyHeadingCenter}>
                                <Text style={styles.modalBodyHeading}>How do i create a wallet</Text>
                            </View>
                            <TouchableOpacity style={styles.closeButton} onPress={toggleModal3}>
                                <Text style={styles.closeButtonText}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>sfeffsfesfsfsef</Text>
                    </View>
                </View>
            </Modal>
            <View style={styles.centeredView}>
                <View style={styles.listBackground}>
                    <View style={styles.list}>
                        <TouchableOpacity onPress={toggleModal}>
                            <Text style={styles.listColor}>F.A.Q</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.list}>
                        <TouchableOpacity onPress={toggleModal1}>
                            <Text style={styles.listColor}>N.F.T</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.list}>
                        <TouchableOpacity onPress={toggleModal2}>
                            <Text style={styles.listColor}>Carbon Credits</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.list}>
                        <TouchableOpacity onPress={toggleModal3}>
                            <Text style={styles.listColor}>How do i create a wallet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Tabs
            onPress3={() => props.navigation.navigate("Battery",{Username})} 
            onPress2={() => props.navigation.navigate("Accounts",{data})}
            onPress1={() => props.navigation.navigate("Profile",{data})}/>
        </View>
    );
}


export default Infopage