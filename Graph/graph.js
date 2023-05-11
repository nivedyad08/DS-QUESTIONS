class Graph {
  constructor() {
    this.adajacentList = {};
  }

  addVertex(vertex) {
    if (!this.adajacentList[vertex]) {
      this.adajacentList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adajacentList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adajacentList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adajacentList[vertex1].add(vertex2);
    this.adajacentList[vertex2].add(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adajacentList[vertex1].has(vertex2) &&
      this.adajacentList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adajacentList[vertex1].delete(vertex2);
    this.adajacentList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adajacentList[vertex]) {
      return;
    }
    for (let adajacentVertex of this.adajacentList[vertex]) {
      this.removeEdge(vertex, adajacentVertex);
    }
    delete this.adajacentList[vertex];
  }

  display() {
    for (let vertex in this.adajacentList) {
      console.log(`${vertex}=>${[...this.adajacentList[vertex]]}`);
    }
  }

  dfs(start) {
    // Create a Set to keep track of visited vertices
    const visited = new Set();

    // Create a stack and push the starting vertex onto it
    const stack = [start];

    // Create an array to store the visited vertices in the order they were visited
    const result = [];

    // Loop until the stack is empty
    while (stack.length) {
      // Pop the top vertex from the stack
      const vertex = stack.pop();

      // Check if the vertex has already been visited
      if (!visited.has(vertex)) {
        // If not, mark it as visited
        visited.add(vertex);

        // Add it to the result list
        result.push(vertex);

        // Push all unvisited neighbors of the vertex onto the stack
        for (let adjacentVertex of this.adajacentList[vertex]) {
          if (!visited.has(adjacentVertex)) {
            stack.push(adjacentVertex);
          }
        }
      }
    }

    // Return the list of visited vertices in the order they were visited
    return result;
  }

  bfs(start) {
    // Create an empty object to keep track of visited vertices
    const visited = {};

    // Create a queue and enqueue the starting vertex onto it
    const queue = [start];

    // Create an array to store the visited vertices in the order they were visited
    const result = [];

    // Mark the starting vertex as visited
    visited[start] = true;

    // Loop until the queue is empty
    while (queue.length) {
      // Dequeue the front vertex from the queue
      const vertex = queue.shift();

      // Add the vertex to the result list
      result.push(vertex);

      // Loop through all the adjacent vertices of the dequeued vertex
      for (let adjacentVertex of this.adajacentList[vertex]) {
        // If the adjacent vertex hasn't been visited yet
        if (!visited[adjacentVertex]) {
          // Mark it as visited
          visited[adjacentVertex] = true;

          // Enqueue the adjacent vertex onto the queue
          queue.push(adjacentVertex);
        }
      }
    }

    // Return the list of visited vertices in the order they were visited
    return result;
  }

  findPath(start, end) {
    const visited = {};
    const path = [];

    const findPathHelper = (vertex) => {
      visited[vertex] = true;
      path.push(vertex);

      if (vertex === end) {
        return true;
      }

      for (let adajacentVertex of this.adajacentList[vertex]) {
        if (!visited[adajacentVertex]) {
          if (findPathHelper(adajacentVertex)) {
            return true;
          }
        }
      }

      path.pop();
      return false;
    };

    findPathHelper(start);
    return path;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");
graph.addEdge("B", "D");

graph.display();
console.log("***************");

console.log(graph.dfs("B"));
console.log(graph.bfs("B"));
// console.log(graph.hasEdge('A','B'));

// graph.removeEdge('A','B')
// graph.display()

// graph.removeVertex('B')
// graph.display()
