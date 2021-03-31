import './Sort_Filters.css'
import React from 'react'
import {DropdownButton, Dropdown, Container, Row, Col} from 'react-bootstrap'

const SortFilter = () =>
{

    //#region  vars
    var filters_label = "Κατηγορίες:"
    var sort_label = "Sorting:"

    const SortChoices = [
        "Increment",
        "Decrement",
        "New to old",
        "Old to new"
    ]

    // Request this from the server
    const ProductGenres = ["genre1", "genre2", "genre3", "genre4", "genre5"];


    const Genres = 5;
    var SelectedGenreΝο = 0;
    var GenreTitle = ProductGenres[0];
    
    const SortChoicesNo = 4;
    var SelectedSortNo = 0;
    var SortTitle = SortChoices[0];

    const GenreDropdowns: JSX.Element[] = [];
    const SortDropdowns: JSX.Element[] = [];

    //#endregion

    //#region init
    for (let i = 0; i < Genres; ++i)
    {
        GenreDropdowns.push(<Dropdown.Item onClick={handleGenreClick} key={"Genres" + (i + 1)} id={"Genres" + (i + 1)} active={i===SelectedGenreΝο}>{ProductGenres[i]}</Dropdown.Item>)
    }

    for (let i = 0; i < SortChoicesNo; ++i)
    {
        SortDropdowns.push(<Dropdown.Item onClick={handleSortClick} key={"SortChoice" + (i+1)} id={"SortChoice" + (i+1)} active={i===SelectedSortNo}>{SortChoices[i]}</Dropdown.Item>)
    }

    console.log(GenreDropdowns[1])
    console.log(SortDropdowns[1])
    //#endregion
    
    //#region handlers

    function handleGenreClick(element)
    {
        let idprefix = "Genres";

        let genreNumber = element.target.id.substring(idprefix.length);

        GenreDropdowns[SelectedGenreΝο] = <Dropdown.Item onClick={handleGenreClick} key={SelectedGenreΝο} id={"Genres" + (SelectedGenreΝο + 1)} active={false}>{ProductGenres[SelectedGenreΝο]}</Dropdown.Item>
        GenreDropdowns[SelectedGenreΝο = genreNumber - 1] = <Dropdown.Item onClick={handleGenreClick} key={SelectedGenreΝο} id={"Genres" + (SelectedGenreΝο + 1)} active={true}>{ProductGenres[SelectedGenreΝο]}</Dropdown.Item>

        GenreTitle = ProductGenres[SelectedGenreΝο];
        document.getElementById("Filters").title = GenreTitle;
        document.getElementById("Filters").innerHTML = GenreTitle;
        // display requested items...
    }

    function handleSortClick(element)
    {
        let idprefix = "SortChoice";
        let sortChoiceNumber = element.target.id.substring(idprefix.length);

        SortDropdowns[SelectedSortNo] = <Dropdown.Item onClick={handleSortClick} key={SelectedSortNo} id={"SortChoice" + (SelectedSortNo+1)} active={false}>{SortChoices[SelectedSortNo]}</Dropdown.Item>
        SortDropdowns[SelectedSortNo = sortChoiceNumber - 1] = <Dropdown.Item onClick={handleSortClick} key={SelectedSortNo} id={"SortChoice" + (SelectedSortNo+1)} active={true}>{SortChoices[SelectedSortNo]}</Dropdown.Item>

        SortTitle = SortChoices[SelectedSortNo];
        document.getElementById("Sorting").title = SortTitle;
        document.getElementById("Sorting").innerHTML = SortTitle;
        //sort items...
    }

    //#endregion
    return( 
        <Container fluid className="mt-3">
            <Row noGutters={true}>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <Row>
                        <Col xl={2} lg={3}>
                            <Row sm={12} noGutters={false}>
                                <Col xl={3} lg={4} className="mt-2">
                                    <span>{filters_label}</span>
                                </Col>
                                <Col lg={1}></Col>
                                <Col lg={4}>
                                    <DropdownButton id="Filters" variant="secondary" title={GenreTitle}>
                                        {GenreDropdowns}
                                    </DropdownButton>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={7} lg={6}></Col>
                        <Col xl={2} lg={2}>
                            <Row sm={12} className="ml-xl-3">
                                <Col xl={5} className="d-none d-xl-block"></Col>
                                <Col xl={3} lg={6} className="mt-2">
                                    <span>{sort_label}</span>
                                </Col>
                                <Col xl={4} lg={4}>
                                    <DropdownButton id="Sorting" variant="secondary" title={SortTitle}>
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
    )
}

export default SortFilter