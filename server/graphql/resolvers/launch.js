const { launch, launcher } = require('../../schemas');

const launchResolvers = {
  Query: {
    launch: async (parent, args, context, info) => {
      let query = {};
      if (args.name || args.type) {
        query.$or = [];
      }
      if (args.name) {
        query.$or.push({
          title: args.name
        });
        query.$or.push({
          title: {
            $regex: /args.name/
          }
        });
      }
      if (args.type) {
        query.$or.push({
          type: args.type
        });
        query.$or.push({
          type: {
            $regex: /args.type/ig
          }
        });
      }
      console.log(args);
      try {
        const foundLaunch = await launch.find(query);
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
    launch: async (
      parent, 
      {title, launchDate, type, payload, successful, remark, description, launcherType, orbit},
      context, 
      info
    ) => {
      const newLaunch = await launch.create({
        title, launchDate, type, payload, successful, remark, description, launcherType, orbit
      });
      let launcherFound = await launcher.findOne({ _id: type });
      launcherFound = launcherFound.toObject();
      if (!launcherFound['launches'] && !launcherFound['launches'].length) {
        launcherFound['launches'] = []
      }
      launcherFound['launches'].push(newLaunch._id);
      let updatedLauncher = await launcher.findOneAndUpdate({ _id: type }, launcherFound);
      return newLaunch;
    }
  }
}

module.exports = {
  launchResolvers
}