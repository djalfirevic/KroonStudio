/* eslint-disable */
import React, { Fragment } from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import axiosService from "./api/github";
import GistList from "./components/GistList";
import FullAvatar from "./components/FullAvatar";
import moment from "moment";
import { CLIENT_ID, CLIENT_SECRET } from './utils/constants';

class App extends React.PureComponent {
  state = {
    gists: [],
    page: 1,
    since: moment().format("YYYY-MM-DD"),
    loading: false,
    fullAvatar: null
  };

  showAvatar = (url) => {
    this.setState({ fullAvatar: url });
  };

  fetchNewGists = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        loading: true
      }),
      () => {
        this.fetchGists();
      }
    );
  };

  refreshList = () => {
    this.setState(
      {
        page: 1,
        loading: true
      },
      () => {
        this.fetchGists();
      }
    );
  };

  fetchGists = async () => {
    const query = `/public?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&since=${this.state.since}&page=${this.state.page}`;

    const response = await axiosService.request({
      url: query,
      method: "GET"
    });

    this.setState({
      gists:
        this.state.page === 1
          ? response.data
          : [...this.state.gists, ...response.data],
      loading: false
    });
  };

  componentDidMount = () => {
    this.fetchGists();
  };

  component = () => {
    if (this.state.fullAvatar) {
      return <FullAvatar url={this.state.fullAvatar} showAvatar={this.showAvatar} />
    }

    return <GistList
      gists={this.state.gists}
      onFetchNewGists={this.fetchNewGists}
      onRefreshList={this.refreshList}
      refreshing={this.state.loading}
      showAvatar={this.showAvatar}
    />
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />

        <SafeAreaView style={styles.container}>
          {this.component()}
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
