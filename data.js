/**
 * @var playerRecords
 * @type array
 * @description used to store the playername and their teams
 * @swagger
 * components:
 *  schemas:
 *      playerRecords:
 *          type: object
 *          required:
 *              - name
 *              - team name
 *          properties:
 *              name:
 *                  type: string
 *                  description: name of the player
 *              :
 *                  type: string
 *                  description: team's name
 *          example:
 *              name: V Kohli
 *              team: RCB
 */
 const playerRecords=[
    {name:'V Kohli', team:'RCB'},
    {name:'M S Dhoni', team:'CSK'},
    {name:'R Sharma', team:'MI'}
];

module.exports = playerRecords;