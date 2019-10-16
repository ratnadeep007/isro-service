const { stage, launcher } = require('../../schemas');

const stageResolvers = {
  Mutation: {
    stage: async (
      parent, 
      {title, description, launcherId, engine, fuel, maxThrust, burnTime}, 
      context, 
      info
    ) => {
      try {
        let launcherFound = await launcher.findOne({ _id: launcherId });
        launcherFound = launcherFound.toObject();
        if (!launcherFound) {
          return new Error('No launcher found with given id');
        }
        const newStage = await stage.create({
          title, description, launcherId, engine, fuel, maxThrust, burnTime
        });
        if (!launcherFound['stages'] && !launcherFound['stage'].length) {
          launcherFound['stages'] = [];
        }
        launcherFound['stages'].push(newStage._id);
        let updateLauncher = await launcher.findOneAndUpdate({ _id: launcherId }, launcherFound);
        return newStage;
      } catch(err) {
        console.log(err);
        return (err);
      }
    }
  }
}

module.exports = {
  stageResolvers
}