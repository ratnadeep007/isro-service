const { launcher } = require('../../schemas');

const launcherResolvers = {
  Query: {
    launcher: async (parent, args, context, info) => {
      let query = {};
      if (args.name) {
        query.$or = [];
        query.$or.push({
          title: args.name
        });
        query.$or.push({
          title: {
            $regex: /args.name/
          }
        });
      }
      console.log(args);
      try {
        const foundLaunch = await launcher.find(query).populate('launches').populate('stages');
        console.log(foundLaunch);
        if (!foundLaunch || !foundLaunch.length) {
          throw new Error('No lauches added');
        } else {
          return foundLaunch;
        }
      } catch (err) {
        return err;
      }
    }
  },
  Mutation: {
    launcher: async (
      parent, 
      {title, shortDescription, longDescription, launches, height, diameter, numberOfStages, liftOfMass, variants, variantsList, firstFlight}, 
      context, 
      info
    ) => {
      try {
        const newLaunch = await launcher.create({
          title, shortDescription, longDescription, launches,
          height, diameter, numberOfStages, liftOfMass, variants, variantsList, firstFlight
        });
        return newLaunch;
      } catch (err) {
        return (err);
      }
    },
    launcherUpdate: async (
      parent, 
      {title, launches}, 
      context, 
      info
    ) => {
      try {
        let foundLaunch = await launcher.findOne({ title });
        foundLaunch = foundLaunch.toObject();
        foundLaunch['launches'] = launches;
        let updateLaunch = await launcher.findOneAndUpdate({ title }, foundLaunch);
        return updateLaunch;
      } catch (err) {
        return err;
      }
    }
  }
}

module.exports = {
  launcherResolvers
}