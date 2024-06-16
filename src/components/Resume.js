import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Link } from '@react-pdf/renderer';
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        padding: 30
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20
    },
    subtitle: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5
    },
    content: {
        fontSize: 14,
        marginTop: 5,
        lineHeight: 1.5
    },
    link: {
        color: 'blue',
        textDecoration: 'none',
        fontSize: 14,
        marginTop: 5
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
        height: 100,
        width: 100
    }
});

// PDF Dökümanının Yapısı
const Resume = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Sebahattin Uzun's Resume</Text>
                <Image
                    style={styles.image}
                    src="https://media.licdn.com/dms/image/D4E03AQG0R9fwX4vMWA/profile-displayphoto-shrink_400_400/0/1667645122481?e=1724284800&v=beta&t=XePB1QlmN3lDxM9JMi6h7L-Y0fLZ6jhHNbxplSBUO9M"
                />
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Profile</Text>
                <Text style={styles.content}>Programmer located in Antwerpen</Text>
                <Text style={styles.content}>Email: senesuzun@gmail.com</Text>
                <Text style={styles.content}>Linkedin: <Link style={styles.link} src="https://www.linkedin.com/in/sebahattin-enes-uzun-86a497249/">https://www.linkedin.com/in/sebahattin-enes-uzun-86a497249/</Link></Text>
               <Text style={styles.content}>GitHub: <Link style={styles.link} src="https://github.com/senesuzun">https://github.com/senesuzun</Link></Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Experience</Text>
                <Text style={styles.content}>Software Developer at XYZ Corp.</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Education</Text>
                <Text style={styles.content}>Programming - Thomas More Hogeschool</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Projects</Text>
                <Text style={styles.content}>Kunstify app</Text>
            </View>
        </Page>
    </Document>
);

export default Resume;
