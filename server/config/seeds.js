import connectDB from './connection'
import Service from '../schema/services'

connectDB.once('open', async () => {
    
    const services = await Service. insertMany([
        {
            title: "Swedish Massage",
            description: "Swedish massage is a type of massage that uses long, flowing strokes to promote relaxation and relieve tension. It is a gentle massage that is suitable for people of all ages and fitness levels. Swedish massage can help to improve circulation, reduce stress, and relieve pain. It can also help to improve sleep and boost energy levels.",
            price: [{ min60: '$80', min90: '$140' }],
            image: "https://imgur.com/MziQVYD"
        },
        {
            title: "Sports Massage",
            description: "Sports massage is a type of massage that is specifically designed to help athletes recover from workouts and injuries. It is a more vigorous massage than Swedish massage, and it uses a variety of techniques to target the muscles and soft tissues that are used in sports. Sports massage can help to improve circulation, reduce muscle soreness, and increase flexibility. It can also help to prevent injuries and improve performance.",
            price: [{ min60: '$80', min90: '$140' }],
            image: "https://imgur.com/2eixG1K",
        },
        {
            title: "Deep Tissue",
            description: "Deep tissue massage is a type of massage that uses deep pressure to target the muscles and connective tissue. It is a more intense massage than Swedish massage or sports massage, and it is typically used to treat chronic pain, muscle tightness, and other conditions. Deep tissue massage can be beneficial for a variety of reasons. It can help to improve circulation, reduce muscle soreness, and increase flexibility. It can also help to relieve pain, improve sleep, and boost energy levels.",
            price: [{ min60: '$80', min90: '$140' }],
            image: "https://imgur.com/KoPSyF6",
        },
        {
            title: "Cupping",
            description: "Cupping is a type of massage that uses suction to create a vacuum on the skin. This can help to improve circulation, reduce inflammation, and relieve pain. Cupping is typically used to treat chronic pain, muscle tightness, and other conditions. Cupping is performed by placing a cup on the skin and then creating a vacuum by either suctioning air out of the cup or using a heat source to create steam. The suction pulls the skin up into the cup, which creates a stretch on the muscles and tissues. This can help to improve circulation, reduce inflammation, and relieve pain.",
            price: [{ min60: '$80', min90: '$140' }],
            image: "https://imgur.com/HdUwuBJ",
        },
        {
            title: "Hot Stones",
            description: "Hot stone massage is a type of massage that uses heated stones to promote relaxation and relieve pain. The stones are typically made of basalt, which is a type of volcanic rock that retains heat well, the stones are typically placed on the back, shoulders, neck, and legs. Hot stone massage can be beneficial for a variety of reasons. It can help to improve circulation, reduce muscle soreness, and relieve pain. It can also help to promote relaxation and reduce stress.",
            price: [{ min60: '$80', min90: '$140' }],
            image: "https://imgur.com/U5vgIUp",
        }
    ])

})