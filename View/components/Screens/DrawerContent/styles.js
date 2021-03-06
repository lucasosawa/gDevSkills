import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    drawerContent: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#1a1c1f'
    },
    userInfoSection:{
        paddingLeft: 20,
        backgroundColor: '#000',
        paddingBottom:10
    },
    title: {
        fontSize: 16,
        marginTop: 15,
        fontWeight: 'bold',
        color: 'white'

    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: 'white'
    },
    row: {
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    section: {
        flexDirection:'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph:{
        fontWeight: 'bold',
        marginRight: 3,
        
    },
    drawerSection: {
        marginTop:25,
        backgroundColor:'#24231f',
        
    },
    bottomDrawerSection:{
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        backgroundColor: '#000'
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        
    }
})