
# Activité Pratique du Contrôle

## Travail à faire :
### 1.Créer le micro-service customer-service qui permet de gérer les client
### 2.Créer le micro-service inventory-service qui permet de gérer les produits
### 3. Créer la Gateway Spring cloud Gateway avec une Configuration statique du système de routage
### 4. Créer l'annuaire Eureka Discrovery Service
### 5. Faire une configuration dynamique des routes de la gateway
### 6. Créer le service de facturation Billing-Service en utilisant Open Feign
### 7. Créer un client Web Angular (Clients, Produits, Factures)
### 8. Déployer le serveur keycloak :
###    - Créer un Realm
###     - Créer un client à sécuriser
###     - Créer des utilisateurs
###     - Créer des rôles
###     - Affecter les rôles aux utilisateurs
###     - Tester les différents modes d'authentification avec Postman en montrant les contenus de Access-Token, Refresh Token 
### 9. Sécuriser les micro-services et le frontend angular en déployant les adaptateurs Keycloak
### 10. Ajouter des Fonctionnalités supplémentaires de votre choix
### 11. Livrable : Un Repository Github contenant :
###    - Le code sources de l'ensemble des micro-services et du frontend
###    - Le rapport montrant les différentes étapes dans le fichier README.MD

![image](https://user-images.githubusercontent.com/81756572/207118352-1dc67c12-4fd2-4f8e-b45b-505ebe83f4c8.png)

#Microservices :

## customer-service
![image](https://user-images.githubusercontent.com/81756572/201520907-d181227e-00eb-4008-87e6-0883d2caec19.png)
## Actuator
![image](https://user-images.githubusercontent.com/81756572/201520951-66f3cab9-534b-49a8-a66d-634ae6e6d87d.png)
![image](https://user-images.githubusercontent.com/81756572/201521057-0cfcebe1-985f-429f-ba42-a1d5569cc37e.png)
![image](https://user-images.githubusercontent.com/81756572/201521121-c83ca6c4-1865-4730-b9a9-39fbc4cdbfd0.png)
# La base de données
![image](https://user-images.githubusercontent.com/81756572/201521265-5bed43b8-99ef-4a48-97b0-e331ff48a966.png)

# Inventory-service
![image](https://user-images.githubusercontent.com/81756572/201523990-5e1cbeec-fd60-4ec7-9091-c794ccc6e144.png)

# Gateway
![image](https://user-images.githubusercontent.com/81756572/201524881-fccb04aa-aac5-4891-913e-5aa5cb9e7e8d.png)
![image](https://user-images.githubusercontent.com/81756572/201524904-21e9c7f7-dfca-4eb3-a49b-e4181a0572c2.png)

#Eureka
![image](https://user-images.githubusercontent.com/81756572/201528667-81db4255-27cc-4d7a-8948-62faf2d98b5c.png)
![image](https://user-images.githubusercontent.com/81756572/201528809-0eefce76-fe0e-4578-af40-6ed8f4a1f5ee.png)

## service d'enregistrement 
### configurer les routes
![image](https://user-images.githubusercontent.com/81756572/201528959-b8286bd1-0da9-4ab8-b947-286d209ccb60.png)
![image](https://user-images.githubusercontent.com/81756572/201528993-8f392ec0-f430-430b-bf04-d26950da9086.png)


## Configuration dynamique 
![image](https://user-images.githubusercontent.com/81756572/201529232-ad28eb8d-960e-41ac-a7af-113b49a4ffe8.png)
![image](https://user-images.githubusercontent.com/81756572/201529246-1310884f-3d06-4a64-8acb-499bacdc432a.png)

#Billing service
![image](https://user-images.githubusercontent.com/81756572/201540433-ba00dd00-9e3b-4bc9-95e0-fe9c0c4cd85e.png)
![image](https://user-images.githubusercontent.com/81756572/201540449-6ecc61dd-ebc0-42d1-b87a-fdf2c80d1ec7.png)
## Billing database
![image](https://user-images.githubusercontent.com/81756572/201541584-11b964d9-bbaa-4f4e-83dc-1b90aa7736b9.png)
![image](https://user-images.githubusercontent.com/81756572/201541680-55427d43-3dd8-4754-9c11-ebeb7deef579.png)


![image](https://user-images.githubusercontent.com/81756572/201542552-df4e7b00-a87d-4ab5-9879-a753478fa015.png)



# Catalog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Generate product component
![image](https://user-images.githubusercontent.com/81756572/205483816-8e876a74-ad1c-4ad7-b717-321e35259fba.png)
![image](https://user-images.githubusercontent.com/81756572/205483884-35ed083e-e981-4b6a-8f8b-59ea212eaa84.png)

## Generate customers component
![image](https://user-images.githubusercontent.com/81756572/205483937-7cf5a91f-d735-485b-b28e-fda04c694bd8.png)
![image](https://user-images.githubusercontent.com/81756572/205483942-b61f768c-cb05-4923-97fc-bbbc4d404490.png)
## Generate billing component 
![image](https://user-images.githubusercontent.com/81756572/205484517-4ca8dc10-7cf8-4975-95e7-d438084b7392.png)
![image](https://user-images.githubusercontent.com/81756572/205484524-b95e7554-3fc3-47b4-b4db-9a1f2cf76394.png)


## Routes
![image](https://user-images.githubusercontent.com/81756572/205484308-04c67cb6-7cda-4c8f-b382-1a282978f26e.png)
![image](https://user-images.githubusercontent.com/81756572/205484744-4c072718-1361-483c-952f-2263e2cb670a.png)
![image](https://user-images.githubusercontent.com/81756572/205484972-63c14864-a8ed-4764-b43b-fdc9b94ec05a.png)

## Services 
![image](https://user-images.githubusercontent.com/81756572/205485615-65e8cf3f-e287-46a7-92df-c4b32e769311.png)
![image](https://user-images.githubusercontent.com/81756572/205485950-c04ed084-0480-4032-a18e-57bbc178e109.png)
![image](https://user-images.githubusercontent.com/81756572/205506913-9201f820-e44b-4a58-9f33-e78b61d148e5.png)
![image](https://user-images.githubusercontent.com/81756572/205512041-4396de11-fa99-4b8e-9d1e-021f25f8eee7.png)

![image](https://user-images.githubusercontent.com/81756572/205512052-2a267ed5-a1fd-40bc-9d02-ef6976429e2b.png)

## Communication avec le backend :
### importer HttpClientModule 
![image](https://user-images.githubusercontent.com/81756572/205486080-c79542a4-78e5-49b5-abd1-29411ffd6bcb.png)

## Products
![image](https://user-images.githubusercontent.com/81756572/205506396-f60a0cb7-c667-4aab-883e-a834fc66c52a.png)

### promo off/on
![image](https://user-images.githubusercontent.com/81756572/205506430-69c31d4c-405a-492f-bfaf-0d80ab13c194.png)
![image](https://user-images.githubusercontent.com/81756572/205506444-b05f369f-3998-4ccc-a77e-0e47357ec213.png)

## add product
![image](https://user-images.githubusercontent.com/81756572/205506498-385ccb21-1806-4273-8ba1-2324582039d1.png)
![image](https://user-images.githubusercontent.com/81756572/205506516-c3195fc4-da8e-4bdf-aecd-c3f01a502352.png)

## delete product 
![image](https://user-images.githubusercontent.com/81756572/205506538-c48f2588-2a4d-4ac7-b33d-ef634bdf5a58.png)
![image](https://user-images.githubusercontent.com/81756572/205506541-f993ba9c-6d0c-4360-8eed-498dfde4aeda.png)

## edit product 
![image](https://user-images.githubusercontent.com/81756572/205506557-c25bc948-eb09-48c0-8713-16e2c64abd40.png)
![image](https://user-images.githubusercontent.com/81756572/205506589-49002257-cb1a-4030-b6d2-b3a27505b6fe.png)
![image](https://user-images.githubusercontent.com/81756572/205506603-92ac47e0-0aae-4e12-aa7c-4cd134eb6a7c.png)

## Search 
![image](https://user-images.githubusercontent.com/81756572/205506640-d8fe406b-4713-4043-8fa1-5a105bc82286.png)


# Keycloak

## Démarrer keycloak
![image](https://user-images.githubusercontent.com/81756572/205649173-b8317fca-84aa-4519-94a0-2b02c9c51c5d.png)
accéder à la console d'administration 
![image](https://user-images.githubusercontent.com/81756572/205649295-1e0a9aaf-492c-4469-b808-a323040b231f.png)
![image](https://user-images.githubusercontent.com/81756572/205649422-62d99712-b9e5-404a-a770-b65cd54d3ff8.png)
![image](https://user-images.githubusercontent.com/81756572/205649516-ec2aaa01-07cb-403e-8567-4fea960ed449.png)

## Créer un realm

![image](https://user-images.githubusercontent.com/81756572/205653171-569aefa7-cfba-4790-81b3-de76432554e7.png)

## Créer un client
![image](https://user-images.githubusercontent.com/81756572/205653609-9e0d6758-70ba-483f-b30b-239e116f4d83.png)
![image](https://user-images.githubusercontent.com/81756572/205653751-13434d0d-0a3a-4960-82a3-d83e7b3247af.png)
![image](https://user-images.githubusercontent.com/81756572/205654456-1421970b-e1cc-4f0d-96ee-5d76d716c015.png)

## Créer users + mdp

![image](https://user-images.githubusercontent.com/81756572/205654641-8b711a6d-3253-4722-99c8-c3daf07002b0.png)
![image](https://user-images.githubusercontent.com/81756572/205655043-c322d604-8055-443e-8b97-f8a82859b8cf.png)

![image](https://user-images.githubusercontent.com/81756572/205654812-7ae6966f-4ba6-4d25-9fa5-2b48ec586649.png)
![image](https://user-images.githubusercontent.com/81756572/205655132-3c1d92f5-9424-4bdc-a9a6-256798eb5b76.png)

## Créer des roles 
![image](https://user-images.githubusercontent.com/81756572/205655338-71e280c3-2b63-4cf1-b3d7-bef1e687c11f.png)
![image](https://user-images.githubusercontent.com/81756572/205655419-126705b6-e60a-4138-b245-38cddc39502d.png)

## Assigner des roles aux utilisateurs 
![image](https://user-images.githubusercontent.com/81756572/205655629-8fcf1da6-0930-4d30-8533-033ecbce77a6.png)
![image](https://user-images.githubusercontent.com/81756572/205655693-d3422826-1191-4ab5-b92f-08ea718c2f1c.png)
 
## Opend ID connect endpoint configuration
 ![image](https://user-images.githubusercontent.com/81756572/205657858-1e53969b-30d9-4ae3-af06-523efc94fd04.png)

##Postman

### password authentication
![image](https://user-images.githubusercontent.com/81756572/205662437-3ad0c0c1-caf5-4793-b5a4-df65c593f53d.png)

![image](https://user-images.githubusercontent.com/81756572/205662375-cdbd3255-1596-44aa-a43e-d9a20880f20f.png)

![image](https://user-images.githubusercontent.com/81756572/205662548-3f0c4387-b293-49b4-8897-11ca6eb07fb0.png)

## contenu de l'Access-Token
![image](https://user-images.githubusercontent.com/81756572/205664428-cc95dee3-6256-47cb-a810-3bde920ec834.png)

## contenu du Refresh Token 
![image](https://user-images.githubusercontent.com/81756572/205663207-19d3053a-21c8-4fd2-9984-55b6d3e88204.png)
![image](https://user-images.githubusercontent.com/81756572/205663421-e4c5d88a-2680-4ff4-81ff-6230cecb88fd.png)

## Access token authentication
![image](https://user-images.githubusercontent.com/81756572/205664966-69a857f2-b0e9-4217-8ad1-507d27801c42.png)

## Client authentication 
![image](https://user-images.githubusercontent.com/81756572/205665550-107b8b3e-428a-4313-b18f-726c3723de5b.png)
![image](https://user-images.githubusercontent.com/81756572/205665661-8506cb4f-96a0-4b5b-a8aa-efe151578c72.png)

![image](https://user-images.githubusercontent.com/81756572/205666285-ee428140-b1f7-4073-aa12-ce51c683cb61.png)
![image](https://user-images.githubusercontent.com/81756572/205666380-ffeca794-68db-4b31-8365-1fdfaa367614.png)

#Sécuriser les micro-services et le frontend angular en déployant les adaptateurs Keycloak
### dependencies 
![image](https://user-images.githubusercontent.com/81756572/205687177-c153c5eb-e549-445e-9356-931a0fb8e3f2.png)
### app.properties
![image](https://user-images.githubusercontent.com/81756572/205689115-aa9e61d8-b05e-44ad-9996-f2b44f52d638.png)
### désactiver ssl de keyloak
![image](https://user-images.githubusercontent.com/81756572/205689294-c37bdabf-c57c-4793-ae3a-def7d19c250a.png)

## security 
### backend
![image](https://user-images.githubusercontent.com/81756572/205697315-5c878602-a989-4ced-b40f-cec0fffe3293.png)

### Keycloak-angular ( front end )
![image](https://user-images.githubusercontent.com/81756572/205702798-33dc5e9e-0bf2-4b49-a34b-1b97dd5cdc61.png)

![image](https://user-images.githubusercontent.com/81756572/205702922-18449b03-8451-43bb-a58b-22d16932fd0b.png)

![image](https://user-images.githubusercontent.com/81756572/207101111-284038ed-8e9d-42d7-a3a3-c3fea9114a3a.png)

![image](https://user-images.githubusercontent.com/81756572/205704285-691b19b7-acdb-4114-8cce-71c8f6883a29.png)

## AuthGuard
### permet de protéger la route en fonction des roles
![image](https://user-images.githubusercontent.com/81756572/207033067-e276702c-b00d-48eb-a3ec-68daf2c2bd34.png)

![image](https://user-images.githubusercontent.com/81756572/207033123-6805b181-f058-4ae9-9fc2-33cab2afb688.png)

## Protection des routes
![image](https://user-images.githubusercontent.com/81756572/207101627-048ab5bb-ab5a-4d13-b5e8-60a5499474aa.png)

## Security service
![image](https://user-images.githubusercontent.com/81756572/207102177-8e271df7-33b2-4618-9827-3fb6595f7706.png)

## Navbar login & logout
![image](https://user-images.githubusercontent.com/81756572/207102878-2acdd14a-b905-47ec-937c-ba57ab71023f.png)

![image](https://user-images.githubusercontent.com/81756572/207103046-e64202e2-8f4f-47ce-9040-215fbcdfb657.png)

![image](https://user-images.githubusercontent.com/81756572/207103207-c2b04ffe-c12d-4965-b9f4-d2eeaa5d5248.png)

## Sécuriser delete & set promo 
![image](https://user-images.githubusercontent.com/81756572/207103511-8fedb0ef-5236-4ec3-9aef-8e112b195547.png)
![image](https://user-images.githubusercontent.com/81756572/207103620-e6425c09-00ff-42ed-a28e-3b16b66671a3.png)

## Website
![image](https://user-images.githubusercontent.com/81756572/207110100-764d91df-6455-4d98-a3c1-418bff7c56e5.png)

## Login
![image](https://user-images.githubusercontent.com/81756572/207110208-ea3bdc36-96c6-44dd-9258-2549d90dcb2f.png)

## After logging in as an Admin

![image](https://user-images.githubusercontent.com/81756572/207110528-bd0687df-f384-4c56-bf90-1fa0f78e9061.png)

