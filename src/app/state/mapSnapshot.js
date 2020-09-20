const mapSnapshot = (snapshot) =>
  JSON.stringify(
    snapshot.docs
      .map((d) => d.data())
      .map((item) => ({
        id: item.id,
        title: item.name,
        children: item.stacks.map((stack) => ({
          id: stack.id,
          title: stack.name,
          children: stack.items.map((item) => ({
            id: item.id,
            title: item.name,
            videoId: item.itemId,
          })),
        })),
      }))
  );
