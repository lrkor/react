import React, { Component, Fragment } from 'react';
import marked from 'marked'
import '../style/workbench.css'
import { Row, Col, Input, Select, Button, DatePicker } from 'antd'
const { Option } = Select;
const { TextArea } = Input;

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
});

class Workbench extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleId: '',  //文章的ID
            articleTitle: '',  //文章标题
            articleContent: '',  //markdown的编辑内容
            markdownContent: '',  //html内容
            introducemd: '',  //简介的markdown内容
            showDate: '',  //发布日期
            updateDate: '',  //修改日志的日期
            typeInfo: '',  //文章类别信息
            selectedType: '',  //选择的文章类别
        }

    }

    changeContent = (e) => {
        console.log(e.target.value);
        let html = marked(e.target.value);
        console.log(this.state.markdownContent)
        this.setState({
            markdownContent: html,
            articleContent: e.target.value
        })
        // console.log(this.props.markdownContent);

    }


    render() {
        return (
            <Fragment>
                <div className="workbench">
                    <Row gutter={5}>
                        <Col span={18}>
                            <Row gutter={10} >
                                <Col span={20}>
                                    <Input
                                        placeholder="博客标题"
                                    />
                                </Col>
                                <Col span={4}>
                                    &nbsp;
                                        <Select defaultValue="1" style={{ width: 120 }}>
                                        <Option value="1">web前端</Option>
                                        <Option value="2">生活</Option>
                                        <Option value="3">学习</Option>
                                    </Select>
                                </Col>
                            </Row>
                            <Row gutter={10} style={{marginTop:'20px'}}>
                                <Col span={12}>
                                    <TextArea
                                        className="markdown-content"
                                        rows={35}
                                        onChange={this.changeContent}
                                        placeholder="文章内容"
                                    />
                                </Col>
                                <Col span={12}>
                                    <div
                                        className="show-html"
                                        dangerouslySetInnerHTML={{ __html: this.state.markdownContent }}
                                    >
                                    </div>

                                </Col>
                            </Row>

                        </Col>

                        <Col span={6}>
                            <Row>
                                <Col span={24}>
                                    <DatePicker
                                        placeholder="发布日期"
                                    />
                                    <Button type="primary" style={{ marginLeft: '20px' }}>发布文章</Button>

                                </Col>
                                <Col span={24}>
                                    <TextArea
                                        rows={4}
                                        placeholder="文章简介"
                                        style={{ marginTop: '20px' }}
                                    />
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>
            </Fragment>
        );
    }
}

export default Workbench;