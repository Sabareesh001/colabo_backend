const {phasemember} = require('../../models')

exports.postPhaseMembers = async(req,res)=>{
    const phaseId = req.params.id;
    const phaseMembers =  req.body;
    console.log(phaseMembers)
    if(!phaseMembers){
        res.send({message:'Please Provide the member details'}).status(400)
    }
    try {
        const result = await phasemember.bulkCreate(phaseMembers,
           { fields:[
                "phase_id",
                "member_id"
            ]}
        )
        res.status(200) .json(result);
    } catch (error) {
        
    }
}