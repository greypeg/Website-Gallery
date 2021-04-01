import './Sort_Filters.css'
import React from 'react'
import {DropdownButton, Dropdown, Container, Row, Col} from 'react-bootstrap'


const SortChoices = {
    0 : "Increment",
    1 : "Decrement",
    2 : "New to old",
    3 : "Old to new"
}

const ProductGenres = ["genre1", "genre2", "genre3", "genre4", "genre5"];


var GenreDropdowns: JSX.Element[] = [];
var SortDropdowns: JSX.Element[] = [];

class SortFilter extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            filters_label: "Κατηγορίες:",
            sort_label: "Sorting:",
            Genres: 5,
            SelectedGenreΝο: 0,
            GenreTitle: ProductGenres[0],
            SortChoicesNo: 4,
            SelectedSortNo: 0,
            SortTitle: SortChoices[0]
        }

        this.handleGenreClick = this.handleGenreClick.bind(this);
        this.handleSortClick = this.handleSortClick.bind(this);

        this.initDropDowns();
    }
    
    initDropDowns()
    {
        if(GenreDropdowns.length !== 0)
        {
            return;
        }
        for (let i = 0; i < this.state.Genres; ++i)
        {
            GenreDropdowns.push(<Dropdown.Item onClick={this.handleGenreClick} key={"Genres" + (i + 1)} id={"Genres" + (i + 1)} active={i===this.state.SelectedGenreΝο}>{ProductGenres[i]}</Dropdown.Item>)
        }

        for (let i = 0; i < this.state.SortChoicesNo; ++i)
        {
            SortDropdowns.push(<Dropdown.Item onClick={this.handleSortClick} key={"SortChoice" + (i+1)} id={"SortChoice" + (i+1)} active={i===this.state.SelectedSortNo}>{SortChoices[i]}</Dropdown.Item>)
        }
    }

    handleGenreClick(element)
    {
        let idprefix = "Genres";

        let genreNumber_str = element.target.id.substring(idprefix.length);
        let genreNumber = genreNumber_str - 1;

        GenreDropdowns[this.state.SelectedGenreΝο] = <Dropdown.Item onClick={this.handleGenreClick} key={this.state.SelectedGenreΝο} id={"Genres" + (this.state.SelectedGenreΝο + 1)} active={false}>{ProductGenres[this.state.SelectedGenreΝο]}</Dropdown.Item>

        GenreDropdowns[genreNumber] = <Dropdown.Item onClick={this.handleGenreClick} key={genreNumber} id={"Genres" + (genreNumber + 1)} active={true}>{ProductGenres[genreNumber]}</Dropdown.Item>

        let GenreTitle = ProductGenres[genreNumber];
        document.getElementById("Filters").title = GenreTitle;
        document.getElementById("Filters").innerHTML = GenreTitle;

        this.state.SelectedGenreΝο = genreNumber;

        this.props.changeSelectedCategory(genreNumber);
        // display requested items...
    }

    handleSortClick(element)
    {
        let idprefix = "SortChoice";
        let sortChoiceNumber_str = element.target.id.substring(idprefix.length);
        let sortChoiceNumber = sortChoiceNumber_str - 1;

        SortDropdowns[this.state.SelectedSortNo] = <Dropdown.Item onClick={this.handleSortClick} key={this.state.SelectedSortNo} id={"SortChoice" + (this.state.SelectedSortNo+1)} active={false}>{SortChoices[this.state.SelectedSortNo]}</Dropdown.Item>
        SortDropdowns[sortChoiceNumber] = <Dropdown.Item onClick={this.handleSortClick} key={sortChoiceNumber} id={"SortChoice" + (sortChoiceNumber+1)} active={true}>{SortChoices[sortChoiceNumber]}</Dropdown.Item>

        let SortTitle = SortChoices[sortChoiceNumber];
        document.getElementById("Sorting").title = SortTitle;
        document.getElementById("Sorting").innerHTML = SortTitle;

        this.state.SelectedSortNo = sortChoiceNumber;

        this.props.changeSelectedSorting(sortChoiceNumber);
        //sort items...
    }

    render()
    {
        return( 
            <Container fluid className="mt-3">
                <Row noGutters={true}>
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Row>
                            <Col xl={2} lg={3}>
                                <Row sm={12} noGutters={false}>
                                    <Col xl={4} lg={4} className="mt-2">
                                        <span>{this.state.filters_label}</span>
                                    </Col>
                                    <Col lg={1}></Col>
                                    <Col lg={4} className="filterButton">
                                        <DropdownButton id="Filters" variant="secondary" title={this.state.GenreTitle}>
                                            {GenreDropdowns}
                                        </DropdownButton>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={7} lg={6}></Col>
                            <Col xl={2} lg={2}>
                                <Row sm={12} className="ml-xl-3">
                                    <Col xl={3} className="d-none d-xl-block"></Col>
                                    <Col xl={5} lg={6} className="mt-2 sortText">
                                        <span>{this.state.sort_label}</span>
                                    </Col>
                                    <Col xl={4} lg={4}>
                                        <DropdownButton id="Sorting" variant="secondary" title={this.state.SortTitle}>
                                            {SortDropdowns}
                                        </DropdownButton>
                                    </Col>
                                    <Col lg={2} className="d-block d-xl-none"></Col>
                                </Row>
                            </Col>
                            <Col sm={1}></Col>
                        </Row>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
    
            </Container>
        );
    }
    
}

export default SortFilter